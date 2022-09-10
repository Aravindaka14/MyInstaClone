import React from "react";
import "./form.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import FileBase64 from "react-file-base64";

const Form = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState({})

    const handleData = async (e) => {
        e.preventDefault()
        await axios({ method: "POST", url: "https://myinstaclone-02.herokuapp.com/form", data: post }).catch((err) => {
            console.log(err)
        }).finally(() => {
            navigate("/postView")
        })
    }
    return (
        <div className="formDiv">
            <header>
                <img className="nameLogo" src="nameLogo.svg" alt="" />
                <span>Instaclone</span>
                <Link to="/form">
                    <img className="camera" src="camera.png" alt="" />
                </Link>
            </header>
            <form onSubmit={handleData}>
                <FileBase64 type="file" onDone={(base64) => { setPost({ ...post, image: base64 }) }} required={true}></FileBase64>
                <input type="text" placeholder="Author" onChange={(e) => { setPost({ ...post, name: e.target.value }) }} required={true} />
                <input type="text" placeholder="Location" onChange={(e) => { setPost({ ...post, location: e.target.value }) }} required={true} />
                <input type="text" placeholder="Description" onChange={(e) => { setPost({ ...post, description: e.target.value }) }} required={true} />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Form;
