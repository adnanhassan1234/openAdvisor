import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import classes from "../index.module.scss";
import AuthAPIs from "APIs/auth"
import { Link, useNavigate } from "react-router-dom";
import { authSuccess } from "redux/reducers/auth";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginRes = async (e) => {
        e.preventDefault();

        try {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            else {
                setValidated(true);
                const res = await AuthAPIs.login(email, password)
                if (res) {
                    dispatch(authSuccess({
                        userId: res.data.data.user.id,
                        accessToken: res.data.data.tokens.accessToken,
                        refreshToken: res.data.data.tokens.refreshToken,
                    }))                   
                    localStorage.setItem("accessToken", JSON.stringify(res.data.data.tokens.accessToken));
                    localStorage.setItem("refreshToken", JSON.stringify(res.data.data.tokens.refreshToken));
                    navigate('/dashboard');

                    toast.success("Login Successfully", {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Incorrect Login Details", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <Form noValidate validated={validated} >
                <h1 className={classes.formTitle}>Login to Open Founder</h1>
                <p>Enter your details below</p>
                <Form.Group className={"form-group"}>
                    <Form.Control type={"email"} placeholder={"Type here"} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Form.Label>Email</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        Email is required.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"form-group"}>
                    <Form.Control type={"password"} placeholder={"Type here"} value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        Password is required.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Link to={"/forgetpassword"} className={"text-orange text-decoration-none"}>Forgot Password</Link>
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Button type={'submit'} variant={"secondary w-100"} onClick={loginRes}>Log In</Button>
                    {/* <Button variant={"secondary w-100"} onClick={handleClick}>Log In</Button> */}
                </Form.Group>
                <Form.Group className={"mb-3 text-center"}>
                    Don’t have an account yet? <Link to={"/signup"} className={"text-orange"}>Sign Up</Link>
                </Form.Group>
            </Form>
        </>
    )
}

export default Login;