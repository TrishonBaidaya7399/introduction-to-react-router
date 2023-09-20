import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {userId, id, title}= post;
    const navigate= useNavigate();
    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={{border: "2px solid black", borderRadius: '10px', padding: '20px', marginBottom: '20px'}}>
            <div>
            <div style={{display: 'flex', alignItems:'center',justifyContent:'center',gap:'10px', marginBottom: '-20px'}}>
                <h4>{id})</h4>                
                <h4>Posted by: Users Id= {userId}</h4>
            </div>
             <h1>{title}</h1>
             <div style={{display: 'flex', flexDirection:'column', gap:'20px'}}>
             <Link to={`/post/${id}`}><button>Post Details</button></Link>
             {/* //by using useNavigate */}
             <button onClick={handleShowDetail}>Click to show detail</button>
             </div>
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