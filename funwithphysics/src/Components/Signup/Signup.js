import React,{useState} from 'react'
import signimg from "../../Images/girl.jpg";
import "./Signup.css"
function Signup() {
    const [username,setusername]=useState();
    const [email,setemail]=useState();
    const [password,setpasssword]=useState();
    return (
        <div className="signup">
            <div className="signmain">
            <figure>
                <img src={signimg} alt="" className="signimg"/>
                <p className="figtext">Designed by <a href="https://www.freepik.com/">Freepik</a></p>
            </figure>
            <form>
            <p className="signhead">Sign Up</p>
            <input type="text" className="forminput fontAwesome" name="name"
            onChange={(e)=>{setusername(e.target.value)}}
            placeholder="&#xf007; Username" required/>
            <input type="email" className="forminput fontAwesome" name="email" 
            onChange={(e)=>{setemail(e.target.value)}}
            autoComplete="off"  placeholder="&#xf0e0; Email" required/>
            <input type="password" className="forminput fontAwesome"  name="password" 
            onChange={(e)=>{setpasssword(e.target.value)}}
            placeholder="&#xf084; Password" required/>
            <button type="submit" className="btn btn-primary signupbtn">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Signup