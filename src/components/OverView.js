import { IssueBox } from './issuebox';
import OverHeader from './OverHeader'

const OverView=({user})=>{
    console.log("Inside Overview");
    return(
        <>
        <OverHeader title={user} />
        <IssueBox label="Pothole on Main Street" discription="There is a large pothole on Main Street that is causing traffic issues." catogory="Road Issue" status="Pending" priority="High" date="2023-10-01" location="Main Street, Cityville" />
        </>

    )
}
export default OverView;