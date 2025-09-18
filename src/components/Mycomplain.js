import Color from './Color'
import { Header } from './heading';
import './Mycomplain.css'
const Mycomplain=()=>{
    return(
        <>
            <Header title="My Complaints" subtitle="Track your Submited Issue" showicon={true} />
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