import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ContactSidebar from "../../Components/ContactSidebar";
import PageTitle from "../../Components/PageTitle";
import Chat from "../../Components/Chat";

const Messages = (props) => {

    return(
        <>
            <section className={"section p-0"}>
                <Container>
                    <ContactSidebar className={"m-0"} />
                    <Row>
                        <Col md={12} className={'p-0'}>
                            <PageTitle title={"Messages"} bgWhite onlyTitle />
                            <Chat />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Messages;