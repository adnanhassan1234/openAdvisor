import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
import { Country, State, City } from "country-state-city";

const MoreInfo = (props) => {

    let user = {
        linkedInProfile: props.userState.linkedInProfile,
        skills: props.userState.skills,
        city: props.userState.city,
        country: props.userState.country
    }

    const [skills, setSkills] = useState([]);

    const handleCommaSeparatedSkills = (value) => {
        console.log(value)
        const skills = value.split(',')
        const skillsArr = []
        skills.forEach(element => {
            if (element && element.length && !skillsArr.includes(element.trim())) skillsArr.push(element.trim())
        });
        console.log('killsArr', skillsArr)
        props.setUserState({ ...props.userState, skills: skillsArr })
    }

    return (
        <>
            <h1 className={classes.formTitle}>More info about you</h1>
            <p>We need additional details about you</p>
            <p>Fill in</p>
            <Form.Group className={"form-group"}>
                <Form.Control type={"text"} placeholder={"Paste link here"} value={user.linkedInProfile} onChange={(e) => { props.setUserState({ ...props.userState, linkedInProfile: e.target.value }) }} required />
                <Form.Label>LinkedIn Profile</Form.Label>
                <Form.Control.Feedback type="invalid">
                    LinkedIn profile url is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"text"} placeholder={"Type here, separate using comma"} value={skills} onChange={(e) => { setSkills(e.target.value); }} onBlur={() => { handleCommaSeparatedSkills(skills) }} required />
                <Form.Label>Skills</Form.Label>
                <Form.Control.Feedback type="invalid">
                    Skills is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Control type={"text"} placeholder={"Type here"} value={user.city} onChange={(e) => { props.setUserState({ ...props.userState, city: e.target.value }) }} required />
                <Form.Label>City</Form.Label>
                <Form.Control.Feedback type="invalid">
                    City is required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"form-group"}>
                <Form.Select
                    options={Country.getAllCountries()}
                    getOptionLabel={(options) => {
                        return options["name"];
                    }}
                    getOptionValue={(options) => {
                        return options["name"];
                    }}
                    value={user.country}
                    onChange={(item) => {
                        props.setUserState({ ...props.userState, country: item.target.value })
                    }}
                >
                    <option selected disabled>Choose here</option>
                    {Country.getAllCountries().map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}
                </Form.Select>
                <Form.Label>Country</Form.Label>
            </Form.Group>

        </>
    );
}

export default MoreInfo