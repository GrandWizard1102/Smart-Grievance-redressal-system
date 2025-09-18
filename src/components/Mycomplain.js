import Color from './Color'
import { Header } from './heading';
import './Mycomplain.css'
import { Mycomplainbox } from './mycomplaintbox';
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
            <Mycomplainbox label= "Broken streetlight on Main Street"
    discription= "The streetlight has been broken for over a week, making the area unsafe at night."
    catogory= "Infrastructure"
    status= "rejected"
    priority= "High"
    date="1/15/2024"
    location= "123 Main Street, Downtown"/>
        </>
    )
}
export default Mycomplain;