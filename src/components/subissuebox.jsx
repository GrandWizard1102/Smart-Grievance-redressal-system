import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import { LikeButton } from "./likebotton";
export function SubissueBox({label, discription, catogory, status,priority,date,location }) {
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
   

    return (
        <>
            <Paper elevation={1} sx={{ borderRadius: "16px", p: 2 }}>
                <Box  sx={{display:"flex",justifyContent:"space-between" }}>
                    
                    <Typography variant="h5" fontWeight="bold">{label}</Typography>
                    <Chip label={priority} color={getPcolor(priority)} variant="filled"  sx={{ textDecoration: "none" }}/>

                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <RoomOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{location}</Typography>

                    </Stack>
                    
                   
                     
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                        <Chip label={status} color={getcolor(status)} variant="filled"  sx={{ textDecoration: "none" }}/>
                        <CalendarTodayOutlinedIcon color="disabled" fontSize="small" />
                        <Typography variant="body2">{date}</Typography>
                    </Stack>
                <Stack>
                    <Typography variant="body1" sx={{ padding: "5px" }}>{discription}</Typography>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                   
                    <Chip label={catogory} variant="outlined"   sx={{ textDecoration: "none" }}  />
                    <LikeButton/>
                </Box>



            </Paper>
        </>
    )
}