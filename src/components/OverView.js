
import { Issuesview } from './issueboxfull';
import OverHeader from './OverHeader'
import { Smallboxview } from './smallboxfull';



const OverView=({user})=>{
    console.log("Inside Overview");
    const oStyle={maxHeight:"550px",overflowY:"scroll"}
    return(
        <div style={oStyle}>
        <OverHeader title={user} />
        <Smallboxview/>
        <Issuesview/>
        </div>

    )
}
export default OverView;