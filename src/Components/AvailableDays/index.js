import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
import AvailabilityAPIs from 'APIs/availability/index'

const AvailableDays = (props) => {

    const [daysState, setDaysState] = useState([])

    const [selectedDays, setSelectedDays] = useState([])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getAvailableDays = async () => {
        try {
            const res = await AvailabilityAPIs.getAvailableDays()
            if (res) {
                console.log('res of days', res.data.data)
                setDaysState(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const availableDays = (e) => {
        console.log(e)
        let days = selectedDays
        console.log('days', days)
        if (e.target.checked) {
            days.push(e.target.id)
        }
        else {
            days.splice(days.indexOf(e.target.id), 1)
        }
        setSelectedDays(days)
        props.setUserState({ ...props.userState, availableDays: days })
    }

    useEffect(() => {
        getAvailableDays()
    }, [])

    return (
        <>
            <h1 className={classes.formTitle}>set your availability</h1>
            <p>You need to setup your availability</p>
            <p className={'fw-semibold'}>Select Days</p>
            <ul className={classes.checkBoxList}>
                {daysState.map((days) => (
                    <li>
                        <Form.Check
                            className={classes.formCheck}
                            label={capitalizeFirstLetter(days.name)}
                            name="days"
                            type={"checkbox"}
                            id={days.id}
                            onChange={((e) => availableDays(e))}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AvailableDays