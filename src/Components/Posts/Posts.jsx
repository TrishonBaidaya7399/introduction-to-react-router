// import React from 'react';
// import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = ()=> {
    const posts = useLoaderData();
    return (
        <div>
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