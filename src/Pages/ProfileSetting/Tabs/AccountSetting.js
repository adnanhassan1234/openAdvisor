import React from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import classes from "./index.module.scss";
import UploadProfilePicture from "../../../Components/UploadProfilePicture";

const AccountSetting = () => {

    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Title className={classes.cardTitle}>Account Information</Card.Title>
                    <UploadProfilePicture />
                    <Row>
                        <Col md={6} className={'offset-md-3'}>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="text" className={'fw-bold'} defaultValue={"John"} />
                                <Form.Label>First Name </Form.Label>
                            </Form.Group>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="text" className={'fw-bold'} defaultValue={"Smith"} />
                                <Form.Label>Last Name </Form.Label>
                            </Form.Group>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="tel" className={'fw-bold'} defaultValue={"+1 378 299 2999"} />
                                <Form.Label>Phone Numberr </Form.Label>
                            </Form.Group>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="email" className={'fw-bold'} defaultValue={"john@gmail.com"} />
                                <Form.Label>Email Address </Form.Label>
                            </Form.Group>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="password" className={'fw-bold'} defaultValue={"********"} />
                                <Form.Label>Password </Form.Label>
                            </Form.Group>
                            <Form.Group className={'form-group'}>
                                <Form.Control type="password" className={'fw-bold'} defaultValue={"********"} />
                                <Form.Label>Confirm Password </Form.Label>
                            </Form.Group>
                            <Form.Group className={`form-group ${classes.btnRow}`}>
                                <Button variant={'light'}>Cancel</Button>
                                <Button variant={'secondary'}>Update Details</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default AccountSetting;