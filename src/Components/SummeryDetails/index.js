import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { Button, Card, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import SelectDropDown from "../SelectDropDown";
import f1 from "../../Images/f1.png";
import f2 from "../../Images/f3.png";
import f3 from "../../Images/f3.png";
import Cards from "react-credit-cards";
import UploadProfilePicture from "../UploadProfilePicture";
import { Link, useNavigate } from "react-router-dom";
import authLogo from "../../Images/authLogo.svg";
import AvailabilityAPIs from 'APIs/availability/index'
import AuthAPIs from 'APIs/auth/index'
import ProfileAPIs from 'APIs/profile/index'
import FileAPIs from 'APIs/file/index'
import { useDispatch } from "react-redux";
import { authSuccess } from "redux/reducers/auth";
import Enums from 'config/enums'
import { toast } from "react-toastify";


const options = [
    { value: "Skills1", label: "Skills1" },
    { value: "Skills2", label: "Skills2" },
    { value: "Skills3", label: "Skills3" },
];


const professions = [
    { type: "Founder", value: 'founder' },
    { type: "CoFounder", value: 'co_founder' },
    { type: "Lawyer", value: 'lawyer' },
    { type: "Accountant", value: 'accountant' },
]


const SummeryDetails = (props) => {

    console.log('This the user from state', props.userState)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [disabled, setDisabled] = useState(true);
    const [isActive, setActive] = useState(false);

    const [daysState, setDaysState] = useState([])
    const [timeSlotsState, setTimeSlotsState] = useState([])

    const [skills, setSkills] = useState(props.userState.skills);


    function handleFormDisable() {
        setDisabled(!disabled);
        setActive(!isActive);
    }
    const [filePitch, setFilePitch] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setFilePitch(URL.createObjectURL(e.target.files[0]));
    }

    const convertFileToUrl = (file) => {
        return (URL.createObjectURL(file))
    }
    const [month, SetMonth] = useState("");
    const [focus, SetFocus] = useState("");


    const getAvailableDays = async () => {
        try {
            const res = await AvailabilityAPIs.getAvailableDays()
            if (res) {
                console.log('days', res.data.data)
                setDaysState(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getAvailableTimeSlots = async () => {
        try {
            const res = await AvailabilityAPIs.getAvailableTimeSlots()
            if (res) {
                console.log('res of times', res.data.data)
                setTimeSlotsState(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const userSignUp = async () => {
        try {
            let user = props.userState;
            let signUpPayload = {
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber,
                firstName: user.firstName,
                lastName: user.lastName,
                profilePic: user.profilePicId
            }
            const res = await AuthAPIs.signUp(signUpPayload)
            console.log('res.data.data', res.data.data)
            let userFromDb = res.data.data;
            dispatch(authSuccess({
                accessToken: JSON.stringify(res.data.data.tokens.accessToken),
                refreshToken: JSON.stringify(res.data.data.tokens.refreshToken),
                userId: JSON.stringify(res.data.data.id)
            }))
            localStorage.setItem('userId', JSON.stringify(userFromDb.id))
            localStorage.setItem('accessToken', JSON.stringify(userFromDb.tokens.accessToken))
            localStorage.setItem('refreshToken', JSON.stringify(userFromDb.tokens.refreshToken))

            let pitchDocument;
            if (Object.keys(user.pitchDeckDocument).length > 0) {
                pitchDocument = await uploadPitchDocument(user.pitchDeckDocument)
            }
            let businessDocument;
            if (Object.keys(user.businessProfileDocument).length > 0) {
                businessDocument = await uploadBusinessDocument(user.businessProfileDocument)
            }
            if (user.otherDocuments.length > 0) {
                await uploadOtherDocuments(user.otherDocuments, userFromDb.id)
            }
            await updateProfile(user, pitchDocument?.id, businessDocument?.id)
            navigate('/dashboard');
            toast.success("Signed Up Successfully", {
                position: "top-right",
                autoClose: 2000,
            });
        } catch (error) {
            console.log('sign-up error', error)
        }
    }

    const uploadPitchDocument = async (file) => {
        try {
            const dataArray = new FormData();
            dataArray.append("file", file);
            const res = await FileAPIs.uploadFile(dataArray)
            console.log('res.data.data', res.data.data)
            props.setUserState({ ...props.userState, pitchDeckDocumentId: res.data.data.id })
            return res.data.data
        } catch (error) {
            console.log('uploadPitchDocument error', error)
        }
    }

    const uploadBusinessDocument = async (file) => {
        try {
            const dataArray = new FormData();
            dataArray.append("file", file);
            const res = await FileAPIs.uploadFile(dataArray)
            console.log('res.data.data', res.data.data)
            props.setUserState({ ...props.userState, businessProfileDocumentId: res.data.data.id })
            return res.data.data
        } catch (error) {
            console.log('uploadBusinessDocument error', error)
        }
    }

    const uploadOtherDocuments = async (files, userId) => {
        try {
            console.log('files', ...files)
            const dataArray = new FormData();
            dataArray.append("attachments", ...files);
            const res = await FileAPIs.uploadFiles(dataArray, userId, Enums.AttachmentsTypeEnum.user)
            console.log('res.data.data', res.data.data)
        } catch (error) {
            console.log('uploadOtherDocuments error', error)
        }
    }

    const updateProfile = async (user, pitchDocumentId, businessDocumentId) => {
        try {
            let profileUpdatePayload = {
                linkedinProfile: user.linkedInProfile,
                skills: user.skills?.length > 0 ? user.skills.length.toString() : [],
                city: user.city,
                country: user.country,
                designation: user.areYou === 'CoFounder' ? 'co_founder' : user.areYou.toLowerCase(),
                lookingFor: user.lookingFor.map(val => val.trim() === 'CoFounder' ? 'co_founder' : val.toLowerCase()),
                pitchDeck: user.pitchDeckDocumentId || pitchDocumentId,
                businessPlan: user.businessProfileDocumentId || businessDocumentId,
                availibility_days: user.availableDays,
                availibility_time: user.availableTimeSlots
            }
            const res = await ProfileAPIs.updateProfile(profileUpdatePayload)
            console.log('res.data', res.data)
        } catch (error) {
            console.log('update profile error', error)
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleCommaSeparatedSkills = (value) => {
        const skills = value.split(',')
        const skillsArr = []
        skills.forEach(element => {
            if (element && element.length && !skillsArr.includes(element.trim())) skillsArr.push(element.trim())
        });
        props.setUserState({ ...props.userState, skills: skillsArr })
    }

    function convert_to_12_hour(hour) {
        if (hour === 0) {
            return "12:00 AM";
        } else {
            if (hour <= 12) {
                return hour > 9 ? `${hour}:00 AM` : `0${hour}:00 AM`;
            } else {
                const remainingHour = hour - 12;
                return remainingHour > 9 ? `${remainingHour}:00 PM` : `0${remainingHour}:00 PM`;
            }
        }
    }

    const availableDays = (e) => {
        console.log(e)
        let days = props.userState.availableDays
        console.log('days', days)
        if (e.target.checked) {
            days.push(e.target.id)
        }
        else {
            days.splice(days.indexOf(e.target.id), 1)
        }
        props.setUserState({ ...props.userState, availableDays: days })
    }

    const timeSlotsArr = (e) => {
        let timeSlots = props.userState.availableTimeSlots
        if (e.target.checked) {
            timeSlots.push(e.target.id)
        }
        else {
            timeSlots.splice(timeSlots.indexOf(e.target.id), 1)
        }
        props.setUserState({ ...props.userState, availableTimeSlots: timeSlots })
    }

    const lookingForArr = (e) => {
        let looking = props.userState.lookingFor
        if (e.target.checked) {
            looking.push(e.target.id)
        }
        else {
            looking.splice(looking.indexOf(e.target.id), 1)
        }
        props.setUserState({ ...props.userState, lookingFor: looking })
    }

    const getPitchDocument = (e) => {
        props.setUserState({ ...props.userState, pitchDeckDocument: e.target.files[0] })
    }

    const getBusinessDocument = (e) => {
        props.setUserState({ ...props.userState, businessProfileDocument: e.target.files[0] })
    }

    const getOtherDocuments = (e) => {
        let files = e.target.files
        props.setUserState({ ...props.userState, otherDocuments: [...files] })
    }

    const removeThisDocumentFromOtherDocuments = (document) => {
        props.userState.otherDocuments.splice(props.userState.otherDocuments.indexOf(document), 1)
        props.setUserState({ ...props.userState, otherDocuments: [...props.userState.otherDocuments] })
    }

    useEffect(() => {
        getAvailableDays()
        getAvailableTimeSlots()
    }, [])

    return (
        <>
            <div className={`${classes.summeryDetail} ${isActive ? '' : `${classes.disabled}`}`}>
                <Container className={'p-0'}>
                    <div className={classes.summerHeader}>
                        <div className={classes.logo}>
                            <Link to={"/"}>
                                <img src={authLogo} alt={"open advisor"} />
                            </Link>
                        </div>
                        <h1 className={classes.formTitle}>Summary</h1>
                        <UploadProfilePicture userState={props.userState} setUserState={props.setUserState} />
                    </div>

                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>Your Information</Card.Title>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} className={"fw-semibold font-16"} value={props.userState.firstName} onChange={(e) => { props.setUserState({ ...props.userState, firstName: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>First Name </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} className={"fw-semibold font-16"} value={props.userState.lastName} onChange={(e) => { props.setUserState({ ...props.userState, lastName: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>Last Name </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"tel"} className={"fw-semibold font-16"} value={props.userState.phoneNumber} onChange={(e) => { props.setUserState({ ...props.userState, phoneNumber: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>Phone Number </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"email"} className={"fw-semibold font-16"} value={props.userState.email} onChange={(e) => { props.setUserState({ ...props.userState, email: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>Email Address </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} className={"fw-semibold font-16"} value={props.userState.linkedInProfile} onChange={(e) => { props.setUserState({ ...props.userState, linkedInProfile: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>LinkedIn Profile </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} placeholder={"Type here, separate using comma"} value={skills} onChange={(e) => { setSkills(e.target.value); }} onBlur={() => { handleCommaSeparatedSkills(skills) }} disabled={disabled} required />
                                        <Form.Label>Skills</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} className={"fw-semibold font-16"} value={props.userState.city} onChange={(e) => { props.setUserState({ ...props.userState, city: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>City </Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Form.Control type={"text"} className={"fw-semibold font-16"} value={props.userState.country} onChange={(e) => { props.setUserState({ ...props.userState, country: e.target.value }) }} disabled={disabled} />
                                        <Form.Label>Country </Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/**
                     * Resources Card
                    */}

                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>Your Resources</Card.Title>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className={"mb-3"}>
                                        <Form.Label>Pitch Deck</Form.Label>
                                        <div className={classes.fileUpload}>
                                            <Form.Label htmlFor={"fileUpload"}>
                                                {/* <input type="file" id={"fileUpload"} onChange={getPitchDocument} disabled={disabled} /> */}
                                                {props.userState?.pitchDeckDocument?.name ?
                                                    <>
                                                        <img src={convertFileToUrl(props.userState.pitchDeckDocument)} alt={props.userState.pitchDeckDocument.name} />
                                                        <Button variant={"delete"} disabled={disabled} onClick={(e) => { props.setUserState({ ...props.userState, pitchDeckDocument: {} }) }}><i className={"fal fa-times"}></i> </Button>
                                                    </>
                                                    :
                                                    <>
                                                        <input type="file" id={"fileUpload"} onChange={getPitchDocument} disabled={disabled} />

                                                        <p>No document</p>
                                                    </>
                                                }
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group className={"mb-3"}>
                                        <Form.Label>Business Plan</Form.Label>
                                        <div className={classes.fileUpload}>
                                            <Form.Label htmlFor={"fileUpload1"}>
                                                {props.userState?.businessProfileDocument?.name ?
                                                    <>
                                                        <img src={convertFileToUrl(props.userState.businessProfileDocument)} alt={props.userState.businessProfileDocument.name} />

                                                        <Button variant={"delete"} disabled={disabled} onClick={(e) => { props.setUserState({ ...props.userState, businessProfileDocument: {} }) }}><i className={"fal fa-times"}></i> </Button>
                                                    </>
                                                    :
                                                    <>
                                                        <input type="file" id={"fileUpload1"} onChange={(e) => { getBusinessDocument(e) }} disabled={disabled} />

                                                        <p>No document</p>
                                                    </>
                                                }
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group className={"mb-3"}>
                                        <Form.Label>Other Documents</Form.Label>
                                        {props.userState.otherDocuments.length ? props.userState.otherDocuments.map(document => {
                                            return (
                                                <div className={classes.fileUpload}>
                                                    <Form.Label htmlFor={"fileUpload2"}>
                                                        {<img src={convertFileToUrl(document)} alt={document.name} />}

                                                        <Button variant={"delete"} disabled={disabled} onClick={(e) => { removeThisDocumentFromOtherDocuments(document) }}><i className={"fal fa-times"}></i> </Button>
                                                    </Form.Label>
                                                </div>
                                            )
                                        }) :
                                            <>
                                                <div className={classes.fileUpload}>
                                                    <Form.Label htmlFor={"fileUpload2"}>
                                                        <input type="file" multiple id={"fileUpload2"} onChange={(e) => { getOtherDocuments(e) }} disabled={disabled} />

                                                        <p>No document</p>
                                                    </Form.Label>
                                                </div>
                                            </>
                                        }


                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/**
                     * Availability Card
                    */}

                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>Your availability</Card.Title>
                            <Form.Group className={"form-group"}>
                                <div>Selected days</div>
                                <ul className={`${classes.checkBoxList} d-flex`}>
                                    {daysState.map((day) => (
                                        <li>
                                            <Form.Check
                                                className={classes.formCheck}
                                                label={capitalizeFirstLetter(day.name)}
                                                name="days"
                                                type={"checkbox"}
                                                id={day.id}
                                                disabled={disabled}
                                                checked={props.userState?.availableDays?.includes(day.id)}
                                                onChange={((e) => availableDays(e))}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Form.Group>
                            <Form.Group className={"form-group"}>
                                <div>Selected times</div>
                                <ul className={`${classes.checkBoxList} d-flex`}>
                                    {timeSlotsState.map((timeSlot) => (
                                        <li>
                                            <Form.Check
                                                className={`form-check-inline ${classes.formCheck}`}
                                                label={`${convert_to_12_hour(timeSlot.start_time)} - ${convert_to_12_hour(timeSlot.end_time)}`}
                                                name="timeSlot"
                                                type={"checkbox"}
                                                id={timeSlot.id}
                                                disabled={disabled}
                                                checked={props.userState?.availableTimeSlots?.includes(timeSlot.id) || false}
                                                onChange={((e) => timeSlotsArr(e))}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>You are a</Card.Title>
                            <ul className={`${classes.checkBoxList} d-flex`}>
                                {professions.map((profession) => (
                                    <li>
                                        <Form.Check
                                            className={classes.formCheck}
                                            label={profession.type}
                                            name="Profession"
                                            type={"radio"}
                                            id={profession.value}
                                            disabled={disabled}
                                            checked={profession.value ? profession?.value === props.userState.areYou : false}
                                            onChange={((e) => props.setUserState({ ...props.userState, areYou: profession.value }))}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>Are you looking for a</Card.Title>
                            <ul className={`${classes.checkBoxList} d-flex`}>
                                {professions.map((profession) => (
                                    <li>
                                        <Form.Check
                                            className={classes.formCheck}
                                            label={profession.type}
                                            name="Profession"
                                            type={"checkbox"}
                                            id={profession.value}
                                            disabled={disabled}
                                            checked={props.userState?.lookingFor?.includes(profession.value)}
                                            onChange={((e) => lookingForArr(e))}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className={"mb-3"}>
                        <Card.Body>
                            <Card.Title className={classes.formTitle}>Subscription</Card.Title>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className={"form-group"}>
                                        <Dropdown className={classes.dropDown}>
                                            <Dropdown.Toggle className={classes.button}>
                                                <div className={classes.text}><div className={"text-orange d-flex"}><sub className={"font-16"}>$</sub><div className={"font-40 fw-bold"}>30</div></div>/Per Month<div></div></div>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className={classes.dropDownMenu}>
                                                <Dropdown.Item href="#/action-1">$ 30 / Per Month</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">$ 40 / Per Month</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">$ 50 / Per Month</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>
                                    <Form.Group className={'form-group'}>
                                        <Form.Label className={"text-dark fw-semibold position-static p-0 mb-3"}>Access to:</Form.Label>
                                        <ul className={"arrowList"}>
                                            <li>Access to all legal documents</li>
                                            <li> Download in .DOC format</li>
                                        </ul>
                                    </Form.Group>
                                </Col>
                                {/*<Col md={12}>
                                  <Row>
                                      <Col md={4}>
                                          <div className={classes.cardImg}>
                                              <Cards
                                                  number={number}
                                                  name={name}
                                                  expiry={expiry}
                                                  cvc={cvc}
                                                  focused={focus}
                                              />
                                          </div>
                                      </Col>
                                      <Col md={8}>
                                          <Row>
                                              <Col md={6}>
                                                  <Form.Group className={"form-group"}>
                                                      <Form.Label>Card Number</Form.Label>
                                                      <Form.Control
                                                          type="tel"
                                                          className="form-control"
                                                          value={number}
                                                          name="number"
                                                          maxlength="16"
                                                          pattern="[0-9]+"
                                                          onChange={(e) => {
                                                              SetNumber(e.target.value);
                                                          }}
                                                          onFocus={(e) => SetFocus(e.target.name)}
                                                          disabled={disabled}

                                                      />
                                                  </Form.Group>
                                              </Col>
                                              <Col md={6}>
                                                  <Form.Group className={"form-group"}>
                                                      <Form.Label>Name</Form.Label>
                                                      <Form.Control
                                                          type="text"
                                                          className="form-control"
                                                          value={name}
                                                          name="name"
                                                          onChange={(e) => {
                                                              SetName(e.target.value);
                                                          }}
                                                          onFocus={(e) => SetFocus(e.target.name)}
                                                          disabled={disabled}

                                                      />
                                                  </Form.Group>
                                              </Col>
                                              <Col md={4}>
                                                  <Form.Group className={"form-group"}>
                                                      <Form.Label>Expiry Date</Form.Label>
                                                      <select
                                                          className="form-selectm "
                                                          name="expiry"
                                                          onChange={handleDate}
                                                          disabled={disabled}

                                                      >
                                                          <option value=" ">Month</option>
                                                          <option value="01">Jan</option>
                                                          <option value="02">Feb</option>
                                                          <option value="03">Mar</option>
                                                          <option value="04">April</option>
                                                          <option value="05">May</option>
                                                          <option value="06">June</option>
                                                          <option value="07">July</option>
                                                          <option value="08">Aug</option>
                                                          <option value="09">Sep</option>
                                                          <option value="10">Oct</option>
                                                          <option value="11">Nov</option>
                                                          <option value="12">Dec</option>
                                                      </select>
                                                  </Form.Group>
                                              </Col>
                                              <Col md={4}>
                                                  <Form.Group className={"form-group"}>
                                                      <Form.Label>Expiry Date</Form.Label>
                                                      <select
                                                          className="form-select"
                                                          name="expiry"
                                                          onChange={handleExpiry}
                                                          disabled={disabled}

                                                      >
                                                          <option value=" ">Year</option>
                                                          <option value="21">2021</option>
                                                          <option value="22">2022</option>
                                                          <option value="23">2023</option>
                                                          <option value="24">2024</option>
                                                          <option value="25">2025</option>
                                                          <option value="26">2026</option>
                                                          <option value="27">2027</option>
                                                          <option value="28">2028</option>
                                                          <option value="29">2029</option>
                                                          <option value="30">2030</option>
                                                      </select>
                                                  </Form.Group>
                                              </Col>
                                              <Col md={4}>
                                                  <Form.Group className={"form-group"}>
                                                      <Form.Label>CVV</Form.Label>
                                                      <Form.Control
                                                          type="tel"
                                                          name="cvc"
                                                          maxLength="3"
                                                          className=" form-control card"
                                                          value={cvc}
                                                          pattern="\d*"
                                                          onChange={(e) => {
                                                              SetCvc(e.target.value);
                                                          }}
                                                          onFocus={(e) => SetFocus(e.target.name)}
                                                          disabled={disabled}

                                                      />
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                      </Col>
                                  </Row>
                              </Col>*/}
                                <Col md={12}>
                                    <Row>
                                        <Col lg={3}>
                                            <Form.Group className={"form-group"}>
                                                <SelectDropDown
                                                    //isSearchable
                                                    //isMulti
                                                    placeHolder="Debit Card"
                                                    className={'fw-bold'}
                                                    options={options}
                                                    onChange={(value) => console.log(value)}
                                                    disabled={disabled}
                                                />
                                                <Form.Label>Payment Method</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Group className={'form-group'}>
                                                <Form.Control type={"text"} className={"fw-semibold font-16 visacard"} defaultValue={"2890 2190 2800 1229 "} disabled={disabled} />
                                                <Form.Label>Card Number</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Group className={'form-group'}>
                                                <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"10/22"} disabled={disabled} />
                                                <Form.Label>Expiry Date</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Group className={'form-group'}>
                                                <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"120"} disabled={disabled} />
                                                <Form.Label>CVV</Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <div className={classes.btnRow}>
                        <Button variant={"primary m-2"} onClick={handleFormDisable}>Edit Details</Button>
                        <Button variant={"secondary m-2"} onClick={userSignUp}>Submit </Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SummeryDetails;