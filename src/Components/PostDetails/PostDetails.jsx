// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post= useLoaderData();
    console.log(post);
    const {userId, title, body}=post;
    return (
        
        <div style={{width: '300px',border: "2px solid black", borderRadius: '10px', padding: '20px', marginBottom: '20px'}}>
         <h4>Posted by User Id: {userId}</h4>
         <h1>Title: {title}</h1>
         <p><small>{body}</small></p>
        </div>
        
    );
};

PostDetails.propTypes = {
    
};

export default PostDetails;