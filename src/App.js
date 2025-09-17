import './App.css';
import color from './components/Color'
import Login from  './components/Login';
//import Body from './components/Body';
import Nav from './components/Nav';
import Mycomplain from './components/Mycomplain';
import SubComplain from './components/SubComplain';
//import Logcontext from './components/logcontext';
import { useState } from 'react';
import { Link, } from 'react-router-dom';
import Color from './components/Color'

import OverView from './components/OverView';
function Header(props){
  const hStyle={
      color:Color.white,
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
    const [mycomp,setmycomp]=useState(false);

      const liStyle={
          textAlign:"center",
          margin:"50px",
          fontSize:"150%",
          textDecoration:"none",
          color:Color.secondary,
      }
      const btStyle={
          background:Color.secondary,
          color:Color.primary,
          width:"5%",
          marginTop:".5%",
          height:"50px",
          flex:"0 1 auto",
          borderRadius:"25px",
          borderWidth:"0",
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
    <nav id="topbar" style={{background:color.primary,}}>
          <div className={`hamburger ${navi?"navi":""}`} onClick={()=>{setnavi(!navi)}}>
            <div className='line' style={{background:color.secondary}}></div>
            <div className='line'style={{background:color.secondary}}></div>
            <div className='line' style={{background:color.secondary}}></div>
          </div>
          <ul id="ulist" style={{color:color.secondary}}>
              <li><Link to='/' style={liStyle}>Home</Link></li>
              <li><Link to='/Ward-Details' style={liStyle}>Ward Details</Link></li>
              <li><Link to='/Contacts'  style={liStyle}>Contacts</Link></li>
          </ul>
          <button style={btStyle} className="Submit" onClick={()=>{setlogin(!login)}}>{userid}</button>
    </nav>
    {navi && <Nav mycomp={mycomp} setmycomp={setmycomp} setnavi={setnavi} scomp={scomp} setscomp={setscomp} Overview={Overview} setoverview={setoverview} user={userid} login={login}loginset={setlogin}/>}
    <div className={`Body${navi? "Body11":""}`}>
    {/*<Body cl1="Raise a Complaint" cl2="Check Status"/>
    //<Body cl1="Recent Activites" cl2="Others" />*/}
    {Overview && <OverView user={userid}/>}
    {scomp && <SubComplain/>}
    {mycomp && <Mycomplain />}
    </div>
    </>
     }
    </>
  );
  
}

export default App;
