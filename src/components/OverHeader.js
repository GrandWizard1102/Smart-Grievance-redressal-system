const OverHeader=({title})=>{
    const hStyle={
        backgroundColor:"darkslategray",
        color:"white",
        width:"50%",
        marginLeft:"30%",
        margin:"20px",
        textAlign:"center",
        padding:"10px",
        borderRadius:"20px",
    }
    console.log({title});
    return(
        <div style={hStyle}>
            <h3>Welcome Back {title}</h3>
            <p>Thanks for making city better</p>
        </div>
    )
}
export default OverHeader;