import React, { useState, useEffect } from "react";
import classes from "../index.module.scss";
import { Button, Form, } from "react-bootstrap";
import Wizard from "./wizard";
import "react-credit-cards/es/styles-compiled.css";
import FileAPIs from "APIs/file"
import SummeryDetails from "../../../Components/SummeryDetails";
import UploadProfilePicture from "../../../Components/UploadProfilePicture";
import SelectDropDown from "../../../Components/SelectDropDown";
import PersonalDetails from "Components/PersonalDetails";
import MoreInfo from "Components/MoreInfo";
import YourResources from "Components/YourResources";
import AvailableDays from "Components/AvailableDays";
import AvailableTime from "Components/AvailableTime";
import AreYou from "Components/AreYou";
import AreYouLooking from "Components/AreYouLooking";

const SignUp = () => {

    let user = {
        profilePic: null,
        profilePicId: null,
        profilePicSrc: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: '',
        linkedInProfile: '',
        skills: null,
        city: '',
        country: '',
        pitchDeckDocument: {},
        pitchDeckDocumentId: '',
        pitchDeckDocumentSrc: null,
        businessProfileDocument: {},
        businessProfileDocumentId: '',
        businessProfileDocumentSrc: null,
        otherDocuments: [],
        otherDocumentSrc: [],
        availableDays: [],
        availableTimeSlots: [],
        areYou: null,
        lookingFor: null,
        hasErrors: false,
        errors: {}
    }

    const [userState, setUserState] = useState(user);
    const [validated, setValidated] = useState(false);

    return (
        <>
            <Form noValidate validated={validated} className={userState.hasErrors ? 'was-validated' : ''}>
                <Wizard>
                    <UploadProfilePicture userState={userState} setUserState={setUserState} />
                    <PersonalDetails userState={userState} setUserState={setUserState} />
                    <MoreInfo userState={userState} setUserState={setUserState} />
                    <YourResources userState={userState} setUserState={setUserState} />
                    <AvailableDays userState={userState} setUserState={setUserState} />
                    <AvailableTime userState={userState} setUserState={setUserState} />
                    <AreYou userState={userState} setUserState={setUserState} />
                    <AreYouLooking userState={userState} setUserState={setUserState} />
                    <SummeryDetails userState={userState} setUserState={setUserState} />
                </Wizard>

            </Form>
        </>
    )
}

export default SignUp;