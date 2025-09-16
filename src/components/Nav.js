//import { useState } from 'react';
import Color from './Color';
import'./Nav.css'
function Nav({mycomp,setmycomp,setnavi,scomp,setscomp,Overview,setoverview,login,loginset}){
    return(
        <>
            <div className='verticalNav' style={{backgroundColor:Color.white}}>
                <li className={`overv ${Overview ? "open" : ""}`} style={{border: `5px solid ${Color.primary}`,color:Color.secondary,...(Overview?{color:Color.secondary,background:Color.primary} : {})}} onClick={()=>{setoverview(!Overview);setscomp(false);setmycomp(false)}}>Overview</li>
                <li className={`vnav ${scomp ? "open" : ""}`} style={{border: `5px solid ${Color.primary}`,color:Color.secondary,...(scomp?{color:Color.secondary,background:Color.primary} : {})}}  onClick={()=>{setscomp(!scomp);setoverview(false);setmycomp(false)}}>Submit Complaints</li>
                <li className={`mycom ${mycomp ? "open" : ""}`} style={{border: `5px solid ${Color.primary}`,color:Color.secondary,...(mycomp?{color:Color.secondary,background:Color.primary} : {})}} onClick={()=>{setmycomp(!mycomp);setoverview(false);setscomp(false)}}>My Complaints</li>
                <li className="vnav" style={{border: `5px solid ${Color.primary}`,color:Color.secondary,}}>Analytics</li>
                <li className='logout' onClick={()=>{loginset(!login);setnavi(false)}} style={{background:Color.secondary,color:Color.white}}>log out</li>
            </div>
        </>
    )
}
export default Nav;