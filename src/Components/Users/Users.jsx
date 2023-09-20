import { useLoaderData, useNavigate } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users= useLoaderData();
    const navigate = useNavigate();
    const handleBack=()=>{
        // it will go 1 step back from the browsers history
        navigate(-1)
    }
    return (
        <div>
            <button onClick={handleBack}>Go Back</button>
            <h1>Our Users: {users.length}</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap:'10px', }}>
                {
                    users.map((user, id)=> <User key={id} user={user}></User>)
                }
            </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;