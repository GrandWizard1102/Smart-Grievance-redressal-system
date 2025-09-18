import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { alpha } from '@mui/material/styles';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Color from './Color'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export function Mycomplainbox({label, discription, catogory, status,priority,date,location }) {
    const getcolor=(status)=>{
        switch(status?.toLowerCase()){
            case "pending": return "warning";
            case "in progress": return "info";
            case "resolved": return "success";
            case "rejected": return "error";
            default: return "default";
        }
    }

    const  getPcolor=(priority)=>{
        switch(priority?.toLowerCase()){
            case "high": return "error";
            case "medium": return "warning";
            case "low": return "info";
            default: return "default";
        }
    }
    const getIcon=(status)=>{
        switch(status?.toLowerCase()){
            case "pending": return AccessTimeIcon;
            case "in progress": return ReportProblemOutlinedIcon;
            case "resolved": return DoneOutlineIcon;
            case "rejected": return CancelIcon;
            default: return "default";
        }
    }
    const Icon=getIcon(status);

    return (
        <>
            <Paper elevation={1} sx={{ borderRadius: "16px", p: 2 }}>
                <Box sx={{display:"flex",justifyContent:"space-between"}} >
                <Stack direction="row" spacing={1} alignItems="center" >
                    <Icon color={getcolor(status)} fontSize="small" />
                    <Typography variant="h5" fontWeight="bold">{label}</Typography>
                </Stack>
                <Chip label={priority}  variant="outlined"  sx={{ textDecoration: "none",backgroundColor:(theme)=>alpha(theme.palette[getPcolor(priority)].main,.8) ,color:Color.secondary}}/>
                </Box>
                <Stack direction="row" spacing={1} alignItems="center" >
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <RoomOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{location}</Typography>

                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center" >
                        <CalendarTodayOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{date}</Typography>
                    </Stack>
                     <Chip label={catogory}  variant="outlined"   sx={{ textDecoration: "none"}}  />
                     
                </Stack>
                <Stack >
                    <Typography variant="body1" sx={{ padding: "5px" }}>{discription}</Typography>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                    <Chip label={status} color={getcolor(status)} variant="filled"  sx={{ textDecoration: "none" }}/>
                    <Stack direction="row" spacing={0.5} alignItems="center" >
                        <Button variant="outlined" size="medium" sx={{borderRadius:3,textTransform: "none"}} startIcon={<RemoveRedEyeOutlinedIcon/>} color="info" >Veiw details</Button>
                        <Button variant="outlined" size="medium" sx={{borderRadius:3,textTransform: "none"}} startIcon={<CancelOutlinedIcon/>} color="error" >cancel</Button>
                    </Stack>
                </Box>



            </Paper>
        </>
    )
}