import React, { useState, useEffect } from "react";
import classes from 'Pages/Auth/index.module.scss'
import { Button, Form, } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";

const YourResources = (props) => {

    let user = {
        pitchDeckDocument: null,
        pitchDeckDocumentSrc: null,
        businessProfileDocument: null,
        businessProfileDocumentSrc: null,
        otherDocuments: [],
        otherDocumentSrc: []
    }


    const [filePitch, setFilePitch] = useState();
    const [filePitchName, setFilePitchName] = useState();
    const [businessProfileDocument, setBusinessProfileDocument] = useState();
    const [otherDocuments, setOtherDocuments] = useState();
    const [otherDocumentsName, setOtherDocumentsName] = useState();

    const uploadPitchDocument = (e) => {
        user.pitchDeckDocument = e.target.files[0]
        setFilePitch(e.target.files[0]);
        props.setUserState({ ...props.userState, pitchDeckDocument: user.pitchDeckDocument })
    }

    const uploadBusinessDocument = (e) => {
        user.businessProfileDocument = e.target.files[0]
        setBusinessProfileDocument(e.target.files[0]);
        props.setUserState({ ...props.userState, businessProfileDocument: user.businessProfileDocument })
    }

    const uploadOtherDocuments = (e) => {
        let files = e.target.files
        user.otherDocuments = files
        let namesArr = []
        for (let index = 0; index < files.length; index++) {
            const element = files[index].name;
            namesArr.push(element)
        }
        setOtherDocuments(files);
        setOtherDocumentsName(namesArr.toString())
        props.setUserState({ ...props.userState, otherDocuments: [...user.otherDocuments] })
    }

    return (
        <>
            <h1 className={classes.formTitle}>Your Resources</h1>
            <p>We need additional resources from you</p>
            <p className={'fw-semibold'}>Fill in</p>
            <Form.Group className={"mb-3"}>
                <Form.Label>Pitch Deck</Form.Label>
                <div className={classes.fileUpload}>
                    <Form.Label htmlFor={"fileUpload"}>
                        <input type="file" id={"fileUpload"} onChange={uploadPitchDocument} />
                        {filePitch ? <>{filePitch.name}</> : "Upload here"}
                    </Form.Label>
                </div>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Business Plan</Form.Label>
                <div className={classes.fileUpload}>
                    <Form.Label htmlFor={"fileUpload1"}>
                        <input type="file" id={"fileUpload1"} onChange={uploadBusinessDocument} />
                        {businessProfileDocument ? <>{businessProfileDocument.name}</> : "Upload here"}
                    </Form.Label>
                </div>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Other Documents</Form.Label>
                <div className={classes.fileUpload}>
                    <Form.Label htmlFor={"fileUpload2"}>
                        <input type="file" multiple id={"fileUpload2"} onChange={uploadOtherDocuments} />
                        {otherDocuments ? <>{otherDocumentsName}</> : "Upload here"}
                    </Form.Label>
                </div>
            </Form.Group>
        </>
    )
}

export default YourResources