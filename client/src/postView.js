import React from "react";
import "./postView.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostView = () => {
    const [posts, setPosts] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:3005/postView").then((data) => {
            setPosts(data.data.reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [update])

    const likeHandler = (post) => {
        const id = post._id
        axios({ url: "http://localhost:3005/postView/update", method: "PUT", data: { id: id } }).then((post) => {
            setUpdate(!update)

        }).catch((err) => {
            console.log(err)
        })
    }
    const navigate = useNavigate()
    const navi = () => {
        navigate("/form")
    }

    return (
        <div className="postDiv">
            <header>
                <img className="nameLogo" src="nameLogo.svg" alt="" />
                <span>Instaclone</span>
                <button className="camera" onClick={() => navi()}><i className="fa fa-camera"></i></button>
            </header>
            <main>
                {posts.map((post, i) => {

                    return (
                        <div className="contentDiv" key={i}>
                            <h3 className="userName">{post.name}</h3>
                            <img className="moreIcon" src="more_icon.svg" alt="" />
                            <p className="userLoc">{post.location}</p>
                            <img className="postImage" src={post.image.base64} alt="" />
                            <button className="post-btn" onClick={() => { likeHandler(post) }}><i className="fa fa-heart"></i></button>
                            <button className="post-btn2"><i className="fa fa-share"></i></button>
                            {/* <img className="heart-share" src="share.png" alt="" /> */}
                            <p className="postDate">{post.date}</p>
                            <p className="postLikes">{post.likes} Likes</p>
                            <p className="postDes">{post.description}</p>
                        </div>
                    )
                })}
            </main >
        </div >
    )
};

export default PostView;
