import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export function IssueBox({label, discription, catogory, status,priority,date,location }) {
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
            case "in progress": return ModelTrainingIcon;
            case "resolved": return DoneOutlineIcon;
            case "rejected": return CancelIcon;
            default: return "default";
        }
    }
    const Icon=getIcon(status);

    return (
        <>
            <Paper elevation={1} sx={{ borderRadius: "16px", p: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Icon color={getcolor(status)} fontSize="small" />
                    <Typography variant="h5" fontWeight="bold">{label}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <RoomOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{location}</Typography>

                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <CalendarTodayOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{date}</Typography>
                    </Stack>
                   
                     <Chip label={priority} color={getPcolor(priority)} variant="filled"  sx={{ textDecoration: "none" }}/>
                </Stack>
                <Stack>
                    <Typography variant="body1" sx={{ padding: "5px" }}>{discription}</Typography>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Chip label={status} color={getcolor(status)} variant="filled"  sx={{ textDecoration: "none" }}/>
                    <Chip label={catogory} variant="outlined"   sx={{ textDecoration: "none" }}  />
                </Box>



            </Paper>
        </>
    )
}