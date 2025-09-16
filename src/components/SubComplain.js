import './subcomp.css'
const SubComplain=()=>{
    return(
        <>
        <h1 style={{textAlign:"center",color:"darkslategray"}}>Submit complaint</h1>
        <div id='subcol'>
           <div>
            <h3>Recent community Issues</h3>
            </div>
            <form id="compdet">
                <h3>Issue details</h3>
                <h4>Issue title*</h4>
                <input type="text" required></input>

            </form>
            <div>

            </div>
        </div>
        </>
    )
}
export default SubComplain;