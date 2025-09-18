import Color from './Color'
import { Header } from './heading';
import './Mycomplain.css'
const Mycomplain=()=>{
    return(
        <>
            <Header title="My Complaints" subtitle="Track your Submited Issue" showicon={true} />
            <form id="searchbar" style={{backgroundColor:Color.primary}}>
                
            </form>
        </>
    )
}
export default Mycomplain;