
import  PropTypes  from "react";
import { Link } from "react-router-dom";
const User = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div style={{border:'2px solid red', borderRadius:'10px', padding:'20px'}}>
            
            <h1>{id}) {name}</h1>
            <p> Email: {email}</p>
            <p> Phone: {phone}</p>
            <Link to= {`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
};

export default User;