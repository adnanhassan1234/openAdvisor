import React from "react";
import { Button, Form} from "react-bootstrap";
import classes from "../index.module.scss";
import {useNavigate} from "react-router-dom";

const NewPassword=()=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
    }
    return(
        <>
            <Form>
                <h1 className={classes.formTitle}>Create New Password</h1>
                <p>Enter your new password below</p>
                <Form.Group className={"form-group"}>
                    <Form.Control type={"pasword"} placeholder={"Type here"} required />
                    <Form.Label>New Password</Form.Label>
                </Form.Group>
                <Form.Group className={"form-group"}>
                    <Form.Control type={"pasword"} placeholder={"Type here"} required />
                    <Form.Label>Re-type New Password</Form.Label>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Button onClick={handleClick} variant={"secondary w-100"}>Create New Password</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default NewPassword;