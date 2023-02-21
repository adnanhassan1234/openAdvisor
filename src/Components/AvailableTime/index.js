import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
import AvailabilityAPIs from 'APIs/availability/index'

const AvailableTime = (props) => {

    const [timeSlotsState, setTimeSlotsState] = useState([])

    const [selectedTimeSlots, setSelectedTimeSlots] = useState([])

    const getAvailableTimeSlots = async () => {
        try {
            const res = await AvailabilityAPIs.getAvailableTimeSlots()
            if (res) {
                console.log('res of times', res.data.data)
                setTimeSlotsState(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const timeSlotsArr = (e) => {
        let timeSlots = selectedTimeSlots
        if (e.target.checked) {
            timeSlots.push(e.target.id)
        }
        else {
            timeSlots.splice(timeSlots.indexOf(e.target.id), 1)
        }
        setSelectedTimeSlots(timeSlots)
        props.setUserState({ ...props.userState, availableTimeSlots: timeSlots })
    }

    function convert_to_12_hour(hour) {
        if (hour === 0) {
            return "12:00 AM";
        } else {
            if (hour <= 12) {
                return `${hour}:00 AM`;
            } else {
                return `${hour - 12}:00 PM`;
            }
        }
    }

    useEffect(() => {
        getAvailableTimeSlots()
    }, [])

    return (
        <>
            <h1 className={classes.formTitle}>set your availability</h1>
            <p>You need to setup your availability</p>
            <p className={'fw-semibold'}>Select Time</p>
            <ul className={classes.checkBoxList}>
                {timeSlotsState.map((timeSlot) => (
                    <li>
                        <Form.Check
                            className={classes.formCheck}
                            label={`${convert_to_12_hour(timeSlot.start_time)} - ${convert_to_12_hour(timeSlot.end_time)}`}
                            name="timeSlot"
                            type={"checkbox"}
                            id={timeSlot.id}
                            onChange={((e) => timeSlotsArr(e))}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AvailableTime