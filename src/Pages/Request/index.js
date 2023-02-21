import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ContactSidebar from "../../Components/ContactSidebar";
import PageTitle from "../../Components/PageTitle";
import ViewRequest from "../../Components/ViewRequest";

const Request = (props) => {

    return(
        <>
            <section className={"section p-0"}>
                <Container>
                    <ContactSidebar className={"m-0"} />
                    <Row>
                        <Col md={12} className={'p-0'}>
                            <PageTitle title={"Requests"} bgWhite onlyTitle />
                            <ViewRequest />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Request;