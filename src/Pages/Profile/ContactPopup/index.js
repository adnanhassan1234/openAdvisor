import React from "react";
import {Modal, Button, Form} from "react-bootstrap";

const ContactPopup=(props)=>{
    return(
        <>
            <Modal
                {...props}
                size="md"
                centered
            >
                <Modal.Header className={"border-0"} closeButton>
                    <Modal.Title>
                        Do you want to contact this Founder?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"form-group"}>
                            <Form.Control type={"text"} placeholder={"Type here"} required />
                            <Form.Label>Name</Form.Label>
                        </Form.Group>
                        <Form.Group className={"form-group"}>
                            <Form.Control type={"email"} placeholder={"Type here"} required />
                            <Form.Label>Email</Form.Label>
                        </Form.Group>
                        <Form.Group className={"form-group"}>
                            <Form.Control as={"textarea"} placeholder={"Type here"} required />
                            <Form.Label>Message</Form.Label>
                        </Form.Group>
                    </Form>
                    <Button variant={"secondary w-100 mb-5"} onClick={props.onHide}>Submit</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ContactPopup;