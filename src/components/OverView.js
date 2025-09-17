
import { Issuesview } from './issueboxfull';
import OverHeader from './OverHeader'

const OverView=({user})=>{
    console.log("Inside Overview");
    return(
        <>
        <OverHeader title={user} />
        <Issuesview/>
        </>

    )
}
export default OverView;