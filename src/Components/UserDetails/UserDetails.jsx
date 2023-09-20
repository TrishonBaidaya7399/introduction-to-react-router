import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user= useLoaderData();
    const navigate = useNavigate();
    const handleBack=()=>{
        // it will go 1 step back from the browsers history
        navigate(-1)
    }
    const {id, name, phone, email, website}= user;
    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <button onClick={handleBack}>Go Back</button>
            <h1>Details About</h1>
            <h3>ID: {id}</h3>
            <h1>Name: {name}</h1>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Website: {website}</h3>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;