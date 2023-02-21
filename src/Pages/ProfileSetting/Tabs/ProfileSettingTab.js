import React, {useState} from "react";
import classes from "./index.module.scss";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import SelectDropDown from "../../../Components/SelectDropDown";
import f1 from "../../../Images/f1.png";
import f2 from "../../../Images/f3.png";
import f3 from "../../../Images/f3.png";
import UploadProfilePicture from "../../../Components/UploadProfilePicture";



const options = [
    { value: "Skills1", label: "Skills1" },
    { value: "Skills2", label: "Skills2" },
    { value: "Skills3", label: "Skills3" },
];


const ProfileSettingTab = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [isActive, setActive] = useState(false);
    function handleGameClick() {
        setDisabled(!disabled);
        setActive(!isActive);
    }
    const [filePitch, setFilePitch] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setFilePitch(URL.createObjectURL(e.target.files[0]));
    }


    return(
        <>
            <div className={`${classes.summeryDetail} ${isActive ? '' : `${classes.disabled}`}`}>
                <Card>
                    <Card.Body>
                        <UploadProfilePicture disabled />
                        <Card.Title className={classes.formTitle}>Your Information</Card.Title>
                        <Row>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"John"} disabled={disabled} />
                                    <Form.Label>First Name </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"Smith"} disabled={disabled} />
                                    <Form.Label>Last Name </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"tel"} className={"fw-semibold font-16"} defaultValue={"+1 378 299 2999"} disabled={disabled} />
                                    <Form.Label>Phone Numberr </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"email"} className={"fw-semibold font-16"} defaultValue={"john@gmail.com"} disabled={disabled} />
                                    <Form.Label>Email Address </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"www.LinkedIn.com/john3/"} disabled={disabled} />
                                    <Form.Label>LinkedIn Profile </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <SelectDropDown
                                        isSearchable
                                        isMulti
                                        placeHolder="Select..."
                                        options={options}
                                        onChange={(value) => console.log(value)}
                                        disabled={disabled}
                                    />
                                    <Form.Label>Skills</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"Toronto"} disabled={disabled} />
                                    <Form.Label>City </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={"text"} className={"fw-semibold font-16"} defaultValue={"Canada"} disabled={disabled} />
                                    <Form.Label>Country </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className={classes.formTitle}>Your Resources</Card.Title>
                        <Row>
                            <Col md={2}>
                                <Form.Group className={"mb-3"}>
                                    <Form.Label>Pitch Deck</Form.Label>
                                    <div className={classes.fileUpload}>
                                        <Form.Label htmlFor={"fileUpload"}>
                                            <input type="file" id={"fileUpload"} onChange={handleChange1} disabled={disabled} />
                                            {filePitch ? <>{filePitch}</> : <><img src={f1} alt={"#"} /> </>}
                                            <Button variant={"delete"}><i className={"fal fa-times"}></i> </Button>
                                        </Form.Label>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className={"mb-3"}>
                                    <Form.Label>Business Plan</Form.Label>
                                    <div className={classes.fileUpload}>
                                        <Form.Label htmlFor={"fileUpload"}>
                                            <input type="file" id={"fileUpload"} onChange={handleChange1} disabled={disabled} />
                                            {filePitch ? <>{filePitch}{}</> : <><img src={f2} alt={"#"} /> </>}
                                            <Button variant={"delete"}><i className={"fal fa-times"}></i> </Button>
                                        </Form.Label>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className={"mb-3"}>
                                    <Form.Label>Other Documents</Form.Label>
                                    <div className={classes.fileUpload}>
                                        <Form.Label htmlFor={"fileUpload"}>
                                            <input type="file" id={"fileUpload"} onChange={handleChange1} disabled={disabled} />
                                            {filePitch ? <>{filePitch}</> : <><img src={f3} alt={"#"} /> </>}
                                            <Button variant={"delete"}><i className={"fal fa-times"}></i> </Button>
                                        </Form.Label>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={"mb-3"}>
                    <Card.Body>
                        <Card.Title className={classes.formTitle}>Your availability</Card.Title>
                        <Form.Group className={"form-group"}>
                            <div>Selected days</div>
                            <ul className={`${classes.checkBoxList} d-flex`}>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"Monday"}
                                        name="timeSlot"
                                        type={"checkbox"}
                                        id={'Monday'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"Tuesday"}
                                        name="timeSlot"
                                        type={"checkbox"}
                                        id={'Tuesday'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"Friday"}
                                        name="timeSlot"
                                        type={"checkbox"}
                                        id={'Friday'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                            </ul>
                        </Form.Group>
                        <Form.Group className={"form-group"}>
                            <div>Selected times</div>
                            <ul className={`${classes.checkBoxList} d-flex`}>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"8:00 AM - 9:00 AM"}
                                        name="time"
                                        type={"checkbox"}
                                        id={'time1'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"10:00 AM - 11:00 AM"}
                                        name="time"
                                        type={"checkbox"}
                                        id={'time2'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                                <li>
                                    <Form.Check
                                        className={`form-check-inline ${classes.formCheck}`}
                                        label={"4:00 PM - 5:00 PM"}
                                        name="time"
                                        type={"checkbox"}
                                        id={'time3'}
                                        disabled={disabled}
                                        checked
                                    />
                                </li>
                            </ul>
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card className={"mb-3"}>
                    <Card.Body>
                        <Card.Title className={classes.formTitle}>You are a</Card.Title>
                        <ul className={`${classes.checkBoxList} d-flex`}>
                            <li>
                                <Form.Check
                                    className={`form-check-inline ${classes.formCheck}`}
                                    label={"Founder"}
                                    name="Founder"
                                    type={"checkbox"}
                                    id={'Founder'}
                                    disabled={disabled}
                                    checked
                                />
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className={"mb-3"}>
                    <Card.Body>
                        <Card.Title className={classes.formTitle}>Are you looking for a</Card.Title>
                        <ul className={`${classes.checkBoxList} d-flex`}>
                            <li>
                                <Form.Check
                                    className={`form-check-inline ${classes.formCheck}`}
                                    label={"Founder"}
                                    name="lookingFor"
                                    type={"checkbox"}
                                    id={'Founder1'}
                                    disabled={disabled}
                                    checked
                                />
                            </li>
                            <li>
                                <Form.Check
                                    className={`form-check-inline ${classes.formCheck}`}
                                    label={"CoFounder"}
                                    name="lookingFor"
                                    type={"checkbox"}
                                    id={'CoFounder1'}
                                    disabled={disabled}
                                    checked
                                />
                            </li>
                            <li>
                                <Form.Check
                                    className={`form-check-inline ${classes.formCheck}`}
                                    label={"Lawyer"}
                                    name="lookingFor"
                                    type={"checkbox"}
                                    id={'Lawyer1'}
                                    disabled={disabled}
                                    checked
                                />
                            </li>
                            <li>
                                <Form.Check
                                    className={`form-check-inline ${classes.formCheck}`}
                                    label={"Accountant"}
                                    name="lookingFor"
                                    type={"checkbox"}
                                    id={'Accountant1'}
                                    disabled={disabled}
                                    checked
                                />
                            </li>
                        </ul>
                    </Card.Body>
                </Card>

                <div className={classes.btnRow}>
                    <Button variant={"outline-dark m-2"} onClick={handleGameClick}>Edit Details</Button>
                </div>
            </div>
        </>
    )
}

export default ProfileSettingTab;