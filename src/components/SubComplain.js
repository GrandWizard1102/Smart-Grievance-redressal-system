import Color from './Color';
import { Header } from './heading';
import './subcomp.css'
import { Subissue } from './subissues';
const SubComplain=()=>{
    return(
        <form>
        <Header title="Submit Complaints" subtitle="Report an Issue in your Community" showicon={false} />
        <div id='subcol'>
           <div id="reccomp" style={{backgroundColor: Color.primary}}>
            <h3 style={{color:"white"}}>Recent community Issues</h3>
            <Subissue/>
            </div>
            <div id="complaintinput" style={{backgroundColor: Color.primary}}>
                <form id="compdet">
                    <h3>Issue details</h3>
                    <h4>Issue title*</h4>
                    <input id="title" type="text" required placeholder='Brief title'></input>
                    <h4 for="category">Select a Category*</h4>
                    <select id="category" required placeholder='select category'>
                        <option value="" selected disabled>-- Select a fruit --</option>
                        <option value="Water Supply">Water Supply</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Roads">Roads</option>
                    </select>
                    <h4>Location</h4>
                    <input id="location" type="text" required placeholder='Enter Location'></input>
                </form>
                <form>
                    <h3>Description</h3>
                    <textarea id="message" type="text" name="message" rows="5" cols="40" placeholder='Brief description here' />
                </form>
            </div>
            <div id="imageupl" style={{backgroundColor: Color.primary,borderRadius:"20px"}}>
                <h3 for="img" style={{color:"white"}}>Photo Upload</h3>
                <div id="image">
                    <input type="file" style={{border:`dotted 2px ${Color.secondary}`}} id="img" name="img" accept='image/*' required/>
                    <div id="imgtips" style={{border:`dotted 2px ${Color.secondary}`,color:Color.secondary}}>
                        <label style={{textAlign:"center",fontSize:"20px"}}>Photo Tips</label>
                        <li>Take clear, well-lit photos</li>
                        <li>Show the issue from multiple angles</li>
                        <li>Include context (street signs, buildings)</li>
                    </div>
                </div>
            </div>
        </div>
        <button id="submitComplaint" type='Submit' style={{backgroundColor: Color.primary,color:Color.secondary}}>Submit Complaint</button>
        </form>
    )
}
export default SubComplain;