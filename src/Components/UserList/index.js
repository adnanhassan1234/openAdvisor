import React, { useState } from 'react';
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

/*type Props = {
    handleClick: Function
};*/


const UserList = ({
    handleClick = "",
    data = "",
    meeting = "",
    request = "",
    chat = "",
}) => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <ul className={`${classes.userList} ${chat ? `${classes.chatList}` : ''}`}>
                {data.map((data) => (
                    <li onClick={handleClick}>
                        <div className={classes.iconBox}>
                            <img src={data.fromOrSender?.profilePic} alt={data.name} />
                        </div>
                        <div className={classes.description}>
                            <h2 className={classes.name}>{data.fromOrSender?.fistName && capitalizeFirstLetter(data.fromOrSender?.fistName)} {data.fromOrSender?.lastName && capitalizeFirstLetter(data.fromOrSender?.lastName)}</h2>
                            <div className={"text-muted font-12"}>{data.fromOrSender?.designation && capitalizeFirstLetter(data.fromOrSender?.designation)}</div>
                        </div>
                        {meeting ?
                            <time className={classes.timeSlot}>{data.timeSlot}</time>
                            : ''}
                        {request ?
                            <div className={classes.btnList}>
                                <Button variant={'secondary'}>Accept</Button>
                                <Button variant={'light'}>Ignore</Button>
                            </div>
                            : ''}
                        {chat ?
                            <div className={classes.statusBar}>
                                <span className={classes.counter}>2</span>
                                <span className={classes.status}></span>
                            </div>
                            : ''}
                    </li>
                ))}
            </ul>
            {meeting ?
                <div className={classes.btnList}>
                    <Link to={"#"} className={"btn btn-link text-dark"}>
                        Go to Boardroom
                        <i className="far fa-long-arrow-right fa-fw"></i>
                    </Link>
                    <Link to={"#"} className={"btn btn-link text-dark"}>
                        View Calendar
                        <i className="far fa-long-arrow-right fa-fw"></i>
                    </Link>
                </div>
                : ''}
            {request ?
                <div className={`${classes.btnList} justify-content-end`}>
                    <Link to={"#"} className={"btn btn-link text-dark"}>
                        View all Requests
                        <i className="far fa-long-arrow-right fa-fw"></i>
                    </Link>
                </div>
                : ''}

        </>
    )
}

export default UserList;