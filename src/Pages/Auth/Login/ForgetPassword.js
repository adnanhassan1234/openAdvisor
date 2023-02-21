import React from "react";
import {Alert, Button, Form} from "react-bootstrap";
import classes from "../index.module.scss";
import {useNavigate} from "react-router-dom";

const ForgetPassword=()=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/newpassword");
    }
    return(
        <>
            <Form>
                <h1 className={classes.formTitle}>Forgot your password?</h1>
                <p>Enter your email below</p>
                <Alert variant="success">Thanks. If there’s an account associated with this email, we’ll send the password reset instructions immediately</Alert>
                <Form.Group className={"form-group"}>
                    <Form.Control type={"email"} placeholder={"Type here"} required />
                    <Form.Label>Email</Form.Label>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Button onClick={handleClick} variant={"secondary w-100"}>Get New Password</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default ForgetPassword;