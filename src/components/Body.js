function Body(props){
    const CStyle={
        background:"white",
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"20px",
        padding:"10px"
    }
    const CardStyle={
        background:"Darkslategray",
        padding:"5%",
        margin:"5%",
        borderRadius:"20px",
        textAlign:"center",
        color:"White",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        transition:"transform 0.2s ease-in-out",
        cursor:"pointer",
    }
    return(
        <div style={CStyle}>
            <h2 className="card-container" style={CardStyle}>
                <h2>{props.cl1}</h2>
            </h2>
            <h2 className="card-container" style={CardStyle}>
                <h2>{props.cl2}</h2>
            </h2>
        </div>
    )
}
export default Body;