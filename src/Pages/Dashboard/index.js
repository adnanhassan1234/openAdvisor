import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MeetingCard from "../../Components/MeetingCard";
import RequestCard from "../../Components/RequestCard";
import { Link } from "react-router-dom";
import ContactSidebar from "../../Components/ContactSidebar";

const Dashboard = (props) => {

    return (
        <>
            <section className={"section"}>
                <Container>
                    <ContactSidebar />
                    <Row>
                        <Col xl={6}>
                            <MeetingCard />
                            <Link to={"#"} className={"btn btn-secondary my-5"}><i className={"fal fa-plus"}></i> Create boardroom</Link>
                        </Col>
                        <Col xl={6}>
                            <RequestCard />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Dashboard;