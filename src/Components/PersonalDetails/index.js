import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";

const PersonalDetails = (props) => {

    let user = {
        firstName: props.userState.firstName,
        lastName: props.userState.lastName,
        email: props.userState.email,
        password: props.userState.password,
        phoneNumber: props.userState.phoneNumber
    }

    return (
        <>
            <h1 className={classes.formTitle}>Sign Up to Open Founder</h1>
            <p>We need your personal details</p>
            <p>Information About You</p>
            <Form.Group className={"form-group invalid"}>
                <Form.Control type={"text"} placeholder={"Type here"} value={user.firstName} onChange={(e) => { props.setUserState({ ...props.userState, firstName: e.target.value }) }} required />
                <Form.Label>First Name</Form.Label>
                <Form.Control.Feedback type="invalid">
                    First Name is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"text"} placeholder={"Type here"} value={user.lastName} onChange={(e) => { props.setUserState({ ...props.userState, lastName: e.target.value }) }} required />
                <Form.Label>Last Name</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Last Name is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"tel"} placeholder={"Type here"} value={user.phoneNumber} onChange={(e) => { props.setUserState({ ...props.userState, phoneNumber: e.target.value }) }} required />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Phone Number is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"email"} placeholder={"Type here"} value={user.email} onChange={(e) => { props.setUserState({ ...props.userState, email: e.target.value }) }} required />
                <Form.Label>Email</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Email is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <div className={"font-16"}>Create Your Password</div>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"password"} placeholder={"Type here"} value={user.password} onChange={(e) => { props.setUserState({ ...props.userState, password: e.target.value }) }} required />
                <Form.Label>Password</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Password is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"password"} placeholder={"Type here"} value={user.repeatPassword} onChange={(e) => { props.setUserState({ ...props.userState, repeatPassword: e.target.value }) }} required />
                <Form.Label>Re-type Password</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Retype your password correctly.
                </Form.Control.Feedback>
            </Form.Group>
        </>
    );
}

export default PersonalDetails;