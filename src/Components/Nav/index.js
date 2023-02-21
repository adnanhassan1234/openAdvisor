import React from "react";
import classes from "./index.module.scss";
import {Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import Notifications from "../Notifications";

const Navigation = (props) => {
    return(

        <>
            <nav id={`${classes.nav}`} className={`${props.dashboard ? `${classes.dashboardNav}` : '' }`}>
                <Nav  as="ul">
                    {props.dashboard ?
                        <>
                            <Nav.Item as="li">
                                <NavLink to="/dashboard">
                                    <i className={"dashboard"}></i>
                                    Dashboard
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={"/"}>
                                    <i className={"cam"}></i>
                                    Virtual Board Room
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/request'}>
                                    <i className={"usergroup"}></i>
                                    Requests
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/'}>
                                    <i className={"calendar"}></i>
                                    Calendar
                                </NavLink>
                            </Nav.Item>
                        </>
                        :
                        <>
                            <Nav.Item as="li">
                                <NavLink to="/">Home</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={"/blogs"}>Blogs</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/terms-of-use'}>Terms of Use</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/terms-conditions'}>Terms & Conditions</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={'/support'}>Contact Us</NavLink>
                            </Nav.Item>
                        </>
                    }

                </Nav>
                {props.dashboard ?
                    <div className={`${classes.btnList} ${classes.actionBtn}`}>
                        <Link to={"/messages"} className={'btnNoti'}><i className={"envelop"}></i><span className={classes.counter}>2</span></Link>
                        <Notifications />
                        <Link to={"/profile-setting"} className={'btnNoti'}><i className={"setting"}></i></Link>
                    </div>
                    :
                    <div className={classes.btnList}>
                        <Link to={"/login"} className={"btn btn-link text-white"}>Login</Link>
                        <Link to={"/signup"} className="btn btn-secondary fw-bold">Sign Up</Link>
                    </div>
                }
            </nav>
        </>
    )
}

export default Navigation;

