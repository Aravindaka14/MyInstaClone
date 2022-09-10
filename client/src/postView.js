import React from "react";
import "./postView.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PostView = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/postView").then((data) => {
            setPosts(data.data.reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="postDiv">
            <header>
                <img className="nameLogo" src="nameLogo.svg" alt="" />
                <span>Instaclone</span>
                <Link to="/form">
                    <img className="camera" src="camera.png" alt="" />
                </Link>
            </header>
            <main>
                {posts.map((post, i) => {
                    return (
                        <div className="contentDiv" key={i}>
                            <h3>{post.name}</h3>
                            <img src="more_icon.svg" alt="" />
                            <p>{post.location}</p>
                            <img className="postImage" src={post.image.base64} alt="" />
                            <p>{post.likes}</p>
                            <p>{post.date}</p>
                            <p>{post.description}</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export default PostView;