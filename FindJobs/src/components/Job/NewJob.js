import React from "react";
import { 
    Box, 
    Grid, 
    FilledInput, 
    Select, 
    MenuItem, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions,
    makeStyles,
    Typography,
    Button,
    IconButton
}   from "@material-ui/core";

import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff"

        }
    },
}))

export default (props) => {
    const classes = useStyles();
    const skills = [
        "Javascript",
        "React.js",
        "Node.js",
        "Vue.js",
        "MongoDB",
        "Java",
        "Python",
        "Ruby",
    ];

    return (
        <Dialog open = {true} fullWidth>
            <DialogTitle>
                <Box display = "flex" justifyContent = "space-between" alignItems="center">
                   Publicar empleo 
                   <IconButton>
                    <CloseIcon/>
                   </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Nombre del empleo *"disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                    <Select
                    fullWith
                     disableUnderline 
                     variant="filled" 
                     defaultvalue="Full Time"
                     >
                        <MenuItem value="Full Time">Tiempo Completo</MenuItem>
                        <MenuItem value="Part Time">Medio Tiempo</MenuItem>
                        <MenuItem value="Contract">Internship</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Nombre de la empresa *"disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="URL de la empresa *"disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWith disableUnderline variant="filled" defaultvalue="Remote">
                            <MenuItem value="Remote">Remoto</MenuItem>
                            <MenuItem value="In-Office">Presencial</MenuItem>
                        </Select>   
                    </Grid>      
                    <Grid item xs={6}>
                        <FilledInput placeholder="Link del empleo *"disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder="Descripcion del empleo *"disableUnderline fullWidth multiline rows={4}/>
                    </Grid>            
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (
                        <Box className = {classes.skillChip} key={skill}>{skill}</Box>
                        ))}
                    </Box>    
                </Box>
            </DialogContent>
            <DialogActions>
                <Box 
                color="red"
                width="100%" 
                display="flex" 
                justifyContent="space-between"
                alignItems="center"
                >
                    <Typography>*Llena los campos</Typography>
                    <Button variant ="contained" disableElevation color="primary">
                        Publicar empleo
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )

}