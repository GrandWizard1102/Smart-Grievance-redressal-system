    import {
        Box, Button, Chip, Dialog,  Paper, Stack, Typography, DialogTitle,
        DialogContent,
        DialogActions,
    } from "@mui/material";
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
    import { useState } from "react";
    export function Mycomplainbox({ label, discription, catogory, status, priority, date, location, response, update,selectedImage }) {
        const [pop, setpop] = useState(false);
        const getcolor = (status) => {
            switch (status?.toLowerCase()) {
                case "pending": return "warning";
                case "in progress": return "info";
                case "resolved": return "success";
                case "rejected": return "error";
                default: return "default";
            }
        }

        const getPcolor = (priority) => {
            switch (priority?.toLowerCase()) {
                case "high": return "error";
                case "medium": return "warning";
                case "low": return "info";
                default: return "default";
            }
        }
        const getIcon = (status) => {
            switch (status?.toLowerCase()) {
                case "pending": return AccessTimeIcon;
                case "in progress": return ReportProblemOutlinedIcon;
                case "resolved": return DoneOutlineIcon;
                case "rejected": return CancelIcon;
                default: return "default";
            }
        }
        const Icon = getIcon(status);

        return (
            <>
                <Paper elevation={1} sx={{ borderRadius: "16px", p: 2, m: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Icon color={getcolor(status)} fontSize="small" />
                            <Typography variant="h5" fontWeight="bold">{label}</Typography>
                        </Stack>
                        <Chip label={priority} variant="outlined" sx={{ textDecoration: "none", backgroundColor: (theme) => alpha(theme.palette[getPcolor(priority)].main, .8), color: Color.secondary }} />
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
                        <Chip label={catogory} variant="outlined" sx={{ textDecoration: "none" }} />

                    </Stack>
                    <Stack >
                        <Typography variant="body1" sx={{ padding: "5px" }}>{discription}</Typography>
                    </Stack>
                    {update &&
                        <Stack spacing={0.5} direction="column" sx={{ backgroundColor: "#e3edfcff", color: "blue", borderRadius: "10px", padding: "5px", paddingLeft: "10px", border: "1px solid #c3b7fcff" }}>
                            <Typography variant="caption" fontWeight="bold" color="info">Management Response:</Typography>
                            <Typography variant="caption" sx={{ paddingLeft: 2 }}>{response}</Typography>
                        </Stack>
                    }


                    <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px" }} >
                        <Chip label={status} color={getcolor(status)} variant="filled" sx={{ textDecoration: "none" }} />
                        <Stack direction="row" spacing={0.5} alignItems="center" >
                            <Button variant="outlined" size="medium" sx={{ borderRadius: 3, textTransform: "none" }} startIcon={<RemoveRedEyeOutlinedIcon />} color="info" onClick={() => setpop(true)}>Veiw details</Button>
                            <Button variant="outlined" size="medium" sx={{ borderRadius: 3, textTransform: "none" }} startIcon={<CancelOutlinedIcon />} color="error" >cancel</Button>
                        </Stack>
                    </Box>



                </Paper>
                <Dialog open={pop} onClose={() => setpop(false)} fullWidth maxWidth="sm">
                <DialogTitle>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5" fontWeight="bold">{label}</Typography>
                        <Chip label={priority} variant="outlined" sx={{ 
                            textDecoration: "none", 
                            backgroundColor: (theme) => alpha(theme.palette[getPcolor(priority)].main, .8), 
                            color: Color.secondary 
                        }} />
                    </Box>
                </DialogTitle>
                
                <DialogContent>
                    <Stack spacing={2}>
                        {/* Status and Category */}
                        <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
                            <Chip label={status} color={getcolor(status)} variant="filled" />
                            <Chip label={catogory} variant="outlined" />
                        </Box>

                        {/* Location and Date */}
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <RoomOutlinedIcon color="disabled" fontSize="small" />
                                <Typography variant="body2">{location}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <CalendarTodayOutlinedIcon color="disabled" fontSize="small" />
                                <Typography variant="body2">{date}</Typography>
                            </Stack>
                        </Stack>

                        {/* Description */}
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Description:
                            </Typography>
                            <Typography variant="body1" sx={{ padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
                                {discription}
                            </Typography>
                        </Box>
                        {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Complaint attachment preview"
                            style={{ 
                                maxWidth: '100%', 
                                maxHeight: '70vh', 
                                objectFit: 'contain' 
                            }}
                        />
                    )}

                        {/* Management Response */}
                        {update && (
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    Management Response:
                                </Typography>
                                <Stack spacing={0.5} direction="column" sx={{ 
                                    backgroundColor: "#e3edfcff", 
                                    borderRadius: "10px", 
                                    padding: "10px", 
                                    border: "1px solid #c3b7fcff" 
                                }}>
                                    <Typography variant="body2">{response}</Typography>
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={() => setpop(false)} variant="contained">Close</Button>
                </DialogActions>
            </Dialog>
                
            </>
        );
    }