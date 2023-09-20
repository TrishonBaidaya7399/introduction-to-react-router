import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({post}) => {
    const {userId, id, title, body}= post;
    return (
        <div style={{border: "2px solid black", borderRadius: '10px', padding: '20px', marginBottom: '20px'}}>
            <div>
            <div style={{display: 'flex', alignItems:'center',justifyContent:'center',gap:'10px', marginBottom: '-20px'}}>
                <h4>{id})</h4>                
                <h4>Posted by: Users Id= {userId}</h4>
            </div>
             <h1>{title}</h1>
             <Link to={`/post/${id}`}><button>Post Details</button></Link>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Post;