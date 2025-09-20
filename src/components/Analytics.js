
import { Alayticswrap } from './analyticswrap';
import { Header } from './heading';
const Analytics=()=>{
    const aStyle={maxHeight:"550px",overflowY:"scroll"}
    return(
        <div style={aStyle}>
             <Header title="Analytics" subtitle="Your complaint submission insights"/>
             <Alayticswrap/>
        </div>
    )
}
export default Analytics;