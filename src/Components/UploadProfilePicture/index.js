import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import img01 from "../../Images/img14.jpg";
import FileAPIs from "APIs/file"


const UploadProfilePicture = (props) => {

    console.log('props.userState in profile pic', props.userState)

    const [imgFile, setImgFile] = useState();
    const [imgId, setImgId] = useState();

    let user = {
        profilePicId: props.userState?.profilePicId || null,
        profilePicSrc: props.userState?.profilePicSrc || null,
    }

    const userImageSrc = () => {
        if (!imgFile && user.profilePicSrc) {
            setImgFile(user.profilePicSrc)
        }
    }

    const getImageUrl = (url) => {

        if (url.toString().includes('ngrok')) {
            let pathname = new URL(url).pathname;

            console.log('pathname', pathname);
            return `http://localhost:3000${pathname}`
        }
        return url
    }

    function handleChange(e) {
        console.log(e.target.files[0]);
        setImgFile(e.target.files[0]);
        uploadToAPI(e.target.files[0])
    }

    const uploadToAPI = async (img) => {
        try {
            const dataArray = new FormData();
            dataArray.append("file", img);
            const res = await FileAPIs.uploadFile(dataArray)
            if (res) {
                setImgId(res.data.data.id)
                user.profilePicId = res.data.data.id
                user.profilePicSrc = res.data.data.path
                setImgFile(res.data.data.path)
                props.setUserState({ ...props.userState, ...user })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userImageSrc()
    }, [])

    return (
        <>
            <div className={'text-center mb-5 photoUploader'}>
                <div className={"imgUpload"}>
                    {props.disabled ? '' :
                        <Form.Label htmlFor={"imgUpload"}>
                            <input type="file" id={"imgUpload"} className={'fw-bold'} onChange={handleChange} />
                            <i className={"fal fa-plus"}></i>
                        </Form.Label>
                    }
                    <div className={"previewImg"}>
                        <img src={imgFile ? getImageUrl(imgFile) : img01} alt={"#"} />
                    </div>

                </div>
                {props.disabled ? '' :
                    <p>Upload your profile photo</p>
                }
            </div>
        </>
    )
}

export default UploadProfilePicture;