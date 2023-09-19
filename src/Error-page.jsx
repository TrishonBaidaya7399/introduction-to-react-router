import { useRouteError } from "react-router-dom";
import { LiaPoopSolid } from 'react-icons/lia'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", marginTop:"150px"}}>
      <LiaPoopSolid style={{fontWeight: "1000" , fontSize:"200px", color:"#CC7722", marginBottom: "-90px"}}></LiaPoopSolid>
      <h1 style={{fontWeight: "1000" , fontSize:"100px", color:"red", marginBottom:"0px" }}>Oops!</h1>
      <p style={{fontWeight: "600" , fontSize:"30px", color:"black", marginBottom:"0px" }}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}