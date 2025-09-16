//import { useState } from 'react';
import'./Nav.css'
function Nav({setnavi,scomp,setscomp,Overview,setoverview,login,loginset}){
    return(
        <>
            <div className='verticalNav'>
                <li className={`overv ${Overview ? "open" : ""}`}  onClick={()=>{setoverview(!Overview);setscomp(false)}}>Overview</li>
                <li className={`vnav ${scomp ? "open" : ""}`}  onClick={()=>{setscomp(!scomp);setoverview(false)}}>Submit Complaints</li>
                <li className="vnav">Analytics</li>
                <li className='logout' onClick={()=>{loginset(!login);setnavi(false)}}>log out</li>
            </div>
        </>
    )
}
export default Nav;