// import React from 'react';
// import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from "react-router-dom";
import Post from "../Post/Post";

const Posts = ()=> {
    const posts = useLoaderData();
    const navigate = useNavigate();
    const handleBack=()=>{
        // it will go 1 step back from the browsers history
        navigate(-1)
    }
    return (
        <div>
            <button onClick={handleBack}>Go Back</button>
            <h1>Posts Container</h1>
            <div style={{display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:"20px"}}>
            {
                posts.map((post, idx)=><Post key={idx} post={post}></Post>)
            }
            </div>
        </div>
    );
};

Posts.propTypes = {
    
};

export default Posts;