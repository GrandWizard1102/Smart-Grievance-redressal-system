//import { useState } from 'react';
import'./Nav.css'
function Nav({mycomp,setmycomp,setnavi,scomp,setscomp,Overview,setoverview,login,loginset}){
    return(
        <>
            <div className='verticalNav'>
                <li className={`overv ${Overview ? "open" : ""}`}  onClick={()=>{setoverview(!Overview);setscomp(false);setmycomp(false)}}>Overview</li>
                <li className={`vnav ${scomp ? "open" : ""}`}  onClick={()=>{setscomp(!scomp);setoverview(false);setmycomp(false)}}>Submit Complaints</li>
                <li className={`mycom ${mycomp ? "open" : ""}`} onClick={()=>{setmycomp(!mycomp);setoverview(false);setscomp(false)}}>My Complaints</li>
                <li className="vnav">Analytics</li>
                <li className='logout' onClick={()=>{loginset(!login);setnavi(false)}}>log out</li>
            </div>
        </>
    )
}
export default Nav;