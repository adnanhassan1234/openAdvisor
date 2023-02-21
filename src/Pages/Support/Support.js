import React, { useState } from "react";
import Banner from "../../Components/Banner";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SupportAPIs from "APIs/support"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Support = () => {

    // Support APIs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");    

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message
        }
        try {
            const res = await SupportAPIs.sendSupportRequest(data);
            if (res) {
                toast.success("Request Submited Successfully", {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
        } catch (error) {
            console.log("error")
            toast.error("Something Went Wrong", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        setEmail("");
        setMessage("");
        setName("");
    }

    return (
        <>
            <Banner
                title={"Support"}
                description={"Send your concerns and other inquiries to us and we will surely get back to you as soon as possible."}
            />
            <section className={"section"}>
                <Container>
                    <Row>
                        <Col md={6} className={"offset-md-3"}>
                            <Form>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={'text'} placeholder={"Type here"} value={name} onChange={(e) => { setName(e.target.value) }} required />
                                    <Form.Label>Name</Form.Label>
                                </Form.Group>
                                <Form.Group className={"form-group"}>
                                    <Form.Control type={'email'} placeholder={"Type here"} value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                    <Form.Label>Email</Form.Label>
                                </Form.Group>
                                <Form.Group className={"form-group"}>
                                    <Form.Control as={"textarea"} placeholder={"Type here"} value={message} onChange={(e) => { setMessage(e.target.value) }} required />
                                    <Form.Label>Message</Form.Label>
                                </Form.Group>
                                <Form.Group className={"form-group"}>
                                    <Button type={"submit"} variant={"secondary w-100"} onClick={submitHandler}>Submit</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Support;