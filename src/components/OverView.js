import OverHeader from './OverHeader'
const OverView=({user})=>{
    console.log("Inside Overview");
    return(
        <OverHeader title={user} />
    )
}
export default OverView;