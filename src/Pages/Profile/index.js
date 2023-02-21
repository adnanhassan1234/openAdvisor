import React from "react";
import classes from "./index.module.scss";
import PageTitle from "../../Components/PageTitle";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import userImg from "../../Images/img14.jpg";
import fileImg from "../../Images/fileImg.svg";
import starRatingImg from "../../Images/starRatingImg.svg";
import ReviewsList from "../../Components/ReviewsList";
import SectionTitle from "../../Components/SectionHeader";
import ColSlider from "../../Components/ColSlider";
import img15 from "../../Images/img15.jpg";
import img16 from "../../Images/img16.jpg";
import img17 from "../../Images/img17.jpg";
import ContactPopup from "./ContactPopup";


const Profile=(props)=>{
    const [modalShow, setModalShow] = React.useState(false);

    const data = [
        {
            category:"RelatedFounders",
            categoryTitle: "Related Founders",
            categoryDescription: "Interesting and informative reading about entrepreneurship, advisors and startups.",
            childData: [
                {
                    title: "Samantha  Mishel",
                    description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
                    imgURL: img15,
                    linkText: "Show More",
                    url: "/founders/",
                },
                {
                    title: "Ann Samuel",
                    description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
                    imgURL: img16,
                    linkText: "Show More",
                    url: "/founders/",
                },
                {
                    title: "Harry Bill",
                    description: "Bringing together a mentor and a mentee is hard, but it’s even harder to make sure that a mentorship can work out over a...  ",
                    imgURL: img17,
                    linkText: "Show More",
                    url: "/founders/",
                },
            ]
        },
    ]

    return(
        <>
            <PageTitle title={"James Gates"} />
            <section className={"p-0"}>
                <Container>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <div className={classes.imgBox}>
                                        <img src={userImg} alt={"#"} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <ul className={'dataList'}>
                                        <li>
                                            <div className={"text-muted"}>Phone</div>
                                            <div className={"fw-semibold"}>+1 267 388 38992</div>
                                        </li>
                                        <li>
                                            <div className={"text-muted"}>Email</div>
                                            <div className={"fw-semibold"}>james@gmail.com</div>
                                        </li>
                                        <li>
                                            <div className={"text-muted"}>DOB</div>
                                            <div className={"fw-semibold"}>Mar. 10. 1989</div>
                                        </li>
                                        <li>
                                            <div className={"text-muted"}>Country of Operation</div>
                                            <div className={"fw-semibold"}>Canada</div>
                                        </li>
                                        <li>
                                            <div className={"text-muted"}>PitchDeck</div>
                                            <div className={classes.fileImg}>
                                                <img src={fileImg} alt={"#"} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className={"text-muted"}>Business plan</div>
                                            <div className={classes.fileImg}>
                                                <img src={fileImg} alt={"#"} />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={"dividerText font-16 fw-semibold pb-3"}><span>Other Documents</span></div>
                                    <ul className={classes.dataList}>
                                        <li>
                                            <div className={classes.fileImg}>
                                                <img src={fileImg}  alt={"#"}   />
                                            </div>
                                        </li>
                                        <li>
                                            <div className={classes.fileImg}>
                                                <img src={fileImg}   alt={"#"}  />
                                            </div>
                                        </li>
                                    </ul>
                                    <Button variant={"secondary w-100"} onClick={() => setModalShow(true)}>Contact</Button>
                                </Col>
                            </Row>
                            <div className={"dividerText font-24 fw-bold py-4"}><span>Reviews (34) <img width={"100"} src={starRatingImg}   alt={"#"}  /> 4.7</span></div>
                            <ReviewsList noPaging />
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <>
                {data.map((data) => ( 
                    <section className={"section"}>
                        <Container>
                            <SectionTitle title={data.categoryTitle} description={data.categoryDescription} />
                            <ColSlider
                                slidesScroll={1}
                                arrows={true}
                                dots={false}
                                slidesShow={3}
                                buttonText="View all Founders"
                                btnUrl="abcc.com"
                                varient={'secondary'}
                                data={data.childData}
                            />
                        </Container>
                    </section>
                ))}
            </>

            <ContactPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Profile;