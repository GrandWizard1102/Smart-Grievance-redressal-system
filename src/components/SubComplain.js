import './subcomp.css'
const SubComplain=()=>{
    return(
        <form>
        <h1 style={{textAlign:"center",color:"darkslategray"}}>Submit complaint</h1>
        <div id='subcol'>
           <div id="grid-item">
            <h3>Recent community Issues</h3>
            </div>
            <div id="complaintinput">
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
            <div id="grid-item">
            <h3 for="img">Photo Upload</h3>
             <div id="image">
                <input type="file" id="img" name="img" accept='image/*' required/>
                <div id="imgtips">
                    <label style={{textAlign:"center",fontSize:"20px"}}>Photo Tips</label>
                    <li>Take clear, well-lit photos</li>
                    <li>Show the issue from multiple angles</li>
                    <li>Include context (street signs, buildings)</li>
                </div>
             </div>
            </div>
        </div>
        <button id="submitComplaint" type='Submit'>Submit Complaint</button>
        </form>
    )
}
export default SubComplain;