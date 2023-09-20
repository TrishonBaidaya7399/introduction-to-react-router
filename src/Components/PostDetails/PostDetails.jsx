// import React from 'react';
// import PropTypes from 'prop-types';

import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post= useLoaderData();
    const navigate = useNavigate();
    const handleBack=()=>{
        // it will go 1 step back from the browsers history
        navigate(-1)
    }
    console.log(post);
    const {userId, title, body}=post;
    return (
        
        <div style={{width: '300px',border: "2px solid black", borderRadius: '10px', padding: '20px', marginBottom: '20px'}}>
        <button onClick={handleBack}>Go Back</button>

         <h4>Posted by User Id: {userId}</h4>
         <h1>Title: {title}</h1>
         <p><small>{body}</small></p>
        </div>
        
    );
};

PostDetails.propTypes = {
    
};

export default PostDetails;