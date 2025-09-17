
import { Issuesview } from './issueboxfull';
import OverHeader from './OverHeader'
import { Smallboxview } from './smallboxfull';



const OverView=({user})=>{
    console.log("Inside Overview");
    return(
        <>
        <OverHeader title={user} />
        <Smallboxview/>
        <Issuesview/>
        </>

    )
}
export default OverView;