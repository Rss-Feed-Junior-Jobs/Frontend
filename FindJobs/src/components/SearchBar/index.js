import React from "react";
import {Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper:{
        backgroundColor:"fff",
        display:"flex",
        boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius:"5px",
        "& > *": {
            flex:1,
            height:"45px",
            margin:"8px",
        },
    },

});
export default (props) => {
    const classes = useStyles();
    return(
        <Box p = {2} mt= {-1}className={classes.wrapper}>
            <Select disableUnderline variant="filled" defaultvalue="Full Time">
                <MenuItem value="Full Time">Tiempo Completo</MenuItem>
                <MenuItem value="Part Time">Medio Tiempo</MenuItem>
                <MenuItem value="Contract">Internship</MenuItem>
            </Select>
            <Select disableUnderline variant="filled" defaultvalue="Remote">
                <MenuItem value="Remote">Remoto</MenuItem>
                <MenuItem value="In-Office">Presencial</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation>Buscar</Button>
        </Box>
    );
};
