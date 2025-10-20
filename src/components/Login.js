import { useContext, useState } from 'react';
import Sign from './Sign'
import './log.css'
import Color from './Color'
import { Logincontext } from './logcontext';


function Login({ text,user}){
    const{setlogin,setuserid,userid}=useContext(Logincontext)
   
    const [pass,setpass]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        console.log("userid:",userid);
        console.log("password:",pass);
        
        localStorage.setItem("isloggedin",true)
        setlogin(false);
    }
   
    console.log("login prop:", setlogin);

    const [sign,setsign]=useState(false);
    return(
       sign?<Sign loginset={setlogin}/>:<form className="container" style={{backgroundColor: Color.primary}} onSubmit={handlesubmit}>
            <h2>{text}</h2>
            <input id="userid" type="text" placeholder='Enter user id'  onChange={(e)=>setuserid(e.target.value)}/>
            <h2>password:</h2>
            <input type="password" id="password" placeholder='Enter password'  onChange={(e)=>setpass(e.target.value)}/>
            <br/>
            <button id="submit"  style={{backgroundColor:Color.secondary,color: Color.white,opacity:userid?1:0.4}}> Submit</button>
            {console.log(user)}
            {user &&
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                 <h4 style={{color:Color.supreme}}>Don't you have an account?</h4>
                 <span className='sign' onClick={()=>{setsign(true)}} style={{color:Color.secondary}}>signup</span>
            </div>}
        </form>
    )
}
export default Login;