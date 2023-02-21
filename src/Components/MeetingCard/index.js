import React from "react";
import classes from "./index.module.scss";
import {Card} from "react-bootstrap";
import Index from "../UserList";
import img1 from "../../Images/img14.jpg";
import UserList from "../UserList";

const MeetingCard=(props)=>{
    const data = [
        {
            name: 'Zain Lubin',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Zain Lubin',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Zain Lubin',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },
        {
            name: 'Zain Lubin',
            desigination: 'Accountant',
            imgUrl: img1,
            timeSlot: '9:00 AM - 10:00 AM',
        },

    ]
    return(
        <>
            <Card className={classes.card}>
                <Card.Header className={classes.header}>
                    <Card.Title>
                        <h1>3</h1>
                    </Card.Title>
                    <div>Meetings today</div>
                </Card.Header>
                <Card.Body className={'px-0'}>
                    <UserList
                        meeting
                        data={data}
                    />
                </Card.Body>
            </Card>
        </>
    )
}

export default MeetingCard;