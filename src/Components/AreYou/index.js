import React from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Form } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";

const AreYou = (props) => {

    const professions = [
        { type: "Founder", value: 'founder' },
        { type: "CoFounder", value: 'co_founder' },
        { type: "Lawyer", value: 'lawyer' },
        { type: "Accountant", value: 'accountant' },
    ]

    return (
        <>
            <h1 className={classes.formTitle}>Are you a</h1>
            <ul className={classes.checkBoxList}>
                {professions.map((profession) => (
                    <li>
                        <Form.Check
                            className={classes.formCheck}
                            label={profession.type}
                            name="areYou"
                            type={"radio"}
                            id={profession.value}
                            onChange={((e) => props.setUserState({ ...props.userState, areYou: profession.value }))}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AreYou