import Color from './Color'
import { Header } from './heading';
import './Mycomplain.css'
import { Mycomplainbox } from './mycomplaintbox';
const Mycomplain=()=>{
    return(
        <>
            <Header title="My Complaints" subtitle="Track your Submited Issue" showicon={true} />
            <form id="searchbar" style={{backgroundColor:Color.primary}}>
                
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