import React from "react";
import classes from "./index.module.scss";
import {Dropdown} from "react-bootstrap";
import img01 from "../../Images/img14.jpg";
import {Link} from "react-router-dom";

const Notifications = () => {
    const data = [
        {
            name: "Harry Bill",
            text: "Harry bill has accepted your request. ",
            imgUrl: img01,
            time: "12h",
            linkText: "Start coversation",

        },
        {
            name: "Alena Torff",
            text: "Alena Torff has sent you a request",
            imgUrl: img01,
            time: "2 Days",
            linkText: "View Alena’s Profile",

        },
    ]
    return(
        <>
            <Dropdown
                align={'end'}
                className={`${classes.notification} notification`}
            >
                <Dropdown.Toggle>
                    <i className={"bell"}></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${classes.dropDownMenuNoti} dropDownMenuNoti`}>
                    <h5>Recent Notification</h5>
                    <ul>
                        {data.map((data)=>(
                            <li>
                                <Link to={'#'} className={classes.imgBox}>
                                    <img src={data.imgUrl} alt={"#"} />
                                    <span className={classes.status}></span>
                                </Link>
                                <h6>{data.name}</h6>
                                <p>{data.text}</p>
                                <time>{data.time}</time>
                                <Link to={"#"} className={'text-orange'}>{data.linkText}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={"#"} className={'text-muted text-decoration-underline d-inline-block m-3'}>See All</Link>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Notifications;