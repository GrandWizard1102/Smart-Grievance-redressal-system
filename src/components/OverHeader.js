import Color from './Color'
const OverHeader=({title})=>{
    const hStyle={
        backgroundColor:Color.primary,
        color:Color.secondary,
        width:"50%",
        margin:"20px",
        textAlign:"center",
        padding:"10px",
        borderRadius:"20px",
    }
    console.log({title});
    return(
        <div style={hStyle}>
            <h3>Welcome Back {title}</h3>
            <p>Thank you for making the city better</p>
        </div>
    )
}
export default OverHeader;