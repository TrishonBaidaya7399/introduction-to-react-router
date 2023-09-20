import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users= useLoaderData();
    return (
        <div>
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