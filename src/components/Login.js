import { useState } from 'react';
import Sign from './Sign'
import './log.css'
import Color from './Color'

function Login({ userdata ,loginset}){
    const [userid,setuserid]=useState("");
    const [pass,setpass]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        console.log("userid:",userid);
        console.log("password:",pass);
        
        userdata(userid);
        loginset(false);
    }
    console.log("userdata prop:", userdata);
    console.log("login prop:", loginset);

    const [sign,setsign]=useState(false);
    return(
       sign?<Sign userdata={userdata} loginset={loginset}/>:<><form className="container" style={{backgroundColor: Color.primary}} onSubmit={handlesubmit}>
            <h2>User id:</h2>
            <input id="userid" type="text" placeholder='Enter user id'  onChange={(e)=>setuserid(e.target.value)}/>
            <h2>password:</h2>
            <input type="password" id="password" placeholder='Enter password'  onChange={(e)=>setpass(e.target.value)}/>
            <br/>
            <button id="submit"  style={{backgroundColor:Color.secondary,color: Color.white,opacity:userid?1:0.4}}> Submit</button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                 <h4 style={{color:Color.supreme}}>Don't you have an account?</h4>
                 <span className='sign' onClick={()=>{setsign(true)}} style={{color:Color.secondary}}>signup</span>
            </div>
        </form>
        </>
    )
}
export default Login;