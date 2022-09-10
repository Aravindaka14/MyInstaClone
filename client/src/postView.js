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
                            <h3 className="userName">{post.name}</h3>
                            <img className="moreIcon" src="more_icon.svg" alt="" />
                            <p className="userLoc">{post.location}</p>
                            <img className="postImage" src={post.image.base64} alt="" />
                            <img className="heart-share" src="heart.png" alt="" />
                            <img className="heart-share" src="share.png" alt="" />
                            <p className="postDate">{post.date}</p>
                            <p className="postLikes">{post.likes} Likes</p>
                            <p className="postDes">{post.description}</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export default PostView;