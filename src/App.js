import './App.css';
import Login from  './components/Login';
//import Body from './components/Body';
import Nav from './components/Nav';
import SubComplain from './components/SubComplain';
//import Logcontext from './components/logcontext';
import { useState } from 'react';
import { Link, } from 'react-router-dom';

import OverView from './components/OverView';
function Header(props){
  const hStyle={
      color:"Darkslategray",
      textAlign:"center",
  }
  return <h1 style={hStyle}>Hi! {props.title}</h1>
}
function App() {
    const [login,setlogin]=useState(true);
    const [userid,setuserid]=useState("Login");
    const[navi,setnavi]=useState(true);
    const [Overview,setoverview]=useState(true);
    const [scomp,setscomp]=useState(false);

      const liStyle={
          textAlign:"center",
          margin:"50px",
          fontSize:"150%",
          textDecoration:"none",
          color:"white",
      }
      const btStyle={
          background:"White",
          color:"darkslategray",
          width:"5%",
          marginTop:".5%",
          height:"50px",
          flex:"0 1 auto",
          borderRadius:"25px",
          cursor:"pointer",
          fontSize:"100%",
          marginLeft: "auto",
      }

  return (
  <>
  <Header title="Welcome Citizen" />
    
    {login ? 
    <Login userdata={setuserid} loginset={setlogin}/>: 
    <>
    <nav id="topbar">
          <div className={`hamburger ${navi?"navi":""}`} onClick={()=>{setnavi(!navi)}}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <ul id="ulist">
              <li><Link to='/' style={liStyle}>Home</Link></li>
              <li><Link to='/Ward-Details' style={liStyle}>Ward Details</Link></li>
              <li><Link to='/Contacts'  style={liStyle}>Contacts</Link></li>
          </ul>
          <button style={btStyle} className="Submit" onClick={()=>{setlogin(!login)}}>{userid}</button>
    </nav>
    {navi && <Nav setnavi={setnavi} scomp={scomp} setscomp={setscomp} Overview={Overview} setoverview={setoverview} user={userid} login={login}loginset={setlogin}/>}
    <div className={`Body${navi? "Body11":""}`}>
    {/*<Body cl1="Raise a Complaint" cl2="Check Status"/>
    //<Body cl1="Recent Activites" cl2="Others" />*/}
    {Overview && <OverView user={userid}/>}
    {scomp && <SubComplain/>}
    </div>
    </>
     }
    </>
  );
  
}

export default App;
