import Color from './Color'
import './Mycomplain.css'
const Mycomplain=()=>{
    return(
        <>
            <h1 style={{textAlign:"center",color:Color.white,margin:"10px"}}>My Complaints</h1>
            <form id="searchbar" style={{backgroundColor:Color.primary}}>
                <input id="compid" placeholder='Enter complaint id'/> 
                <select id="options">
                    <option value="" selected disabled>--Select a category--</option>
                    <option value="Water Supply">Water Supply</option>
                    <option value="Road">Road</option>
                </select>
                <select id="status">
                    <option value="" selected disabled >--Select status--</option>
                    <option value="in progress">In progress</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <select id="arrange">
                    <option value="" selected disabled >--Select order--</option>
                    <option value="Newest First">Newest First</option>
                    <option value="Oldest First">Oldest First</option>
                </select>
            </form>
        </>
    )
}
export default Mycomplain;