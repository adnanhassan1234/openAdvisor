import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Card } from "react-bootstrap";
import Index from "../UserList";
import img1 from "../../Images/img14.jpg";
import UserList from "../UserList";
import ContactAPIs from 'APIs/contact-requests'

const RequestCard = (props) => {

    const [requests, setRequests] = useState([]);

    const getRecievedRequests = async () => {
        const requests = await ContactAPIs.getRecievedRequests()
        if (requests) {
            console.log('R')
            setRequests(requests.data.data)
        }
    }
    useEffect(() => {
        getRecievedRequests();
    }, [])

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
    return (
        <>
            <Card className={classes.card}>
                <Card.Header className={classes.header}>
                    <Card.Title>
                        <h1>{requests.length}</h1>
                    </Card.Title>
                    <div>New Requests</div>
                </Card.Header>
                <Card.Body className={'px-0'}>
                    <UserList
                        request
                        data={requests}
                    />
                </Card.Body>
            </Card>
        </>
    )
}

export default RequestCard;