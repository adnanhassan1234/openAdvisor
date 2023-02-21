import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";

const AreYouLooking = (props) => {

    const [lookingFor, setLookingFor] = useState([])

    const areYouLooking = [
        { type: "Founder", value: 'founder' },
        { type: "CoFounder", value: 'co_founder' },
        { type: "Lawyer", value: 'lawyer' },
        { type: "Accountant", value: 'accountant' },
    ]


    const lookingForArr = (e) => {
        let looking = lookingFor
        if (e.target.checked) {
            looking.push(e.target.id)
        }
        else {
            looking.splice(looking.indexOf(e.target.id), 1)
        }
        setLookingFor(looking)
        props.setUserState({ ...props.userState, lookingFor: looking })
    }

    return (
        <>
            <h1 className={classes.formTitle}>are you looking for a</h1>
            <ul className={classes.checkBoxList}>
                {areYouLooking.map((areYouLooking) => (
                    <li>
                        <Form.Check
                            className={classes.formCheck}
                            label={areYouLooking.type}
                            name="AreYouLooking"
                            type={"checkbox"}
                            id={areYouLooking.value}
                            onChange={((e) => lookingForArr(e))}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AreYouLooking