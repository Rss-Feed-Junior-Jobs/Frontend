import React from "react";
import {Box, Grid, Typography, Button, createMuiTheme } from "@material-ui/core";

export default (props) => (
    <Box py ={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs ={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">Rss Feed Junior Jobs</Typography>
                    <Button variant = "contained" color = "primary" disableElevation>
                        Publicar empleo
                    </Button>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h7">Encuentra tu empleo!</Typography>
                </Box>
            </Grid>
        </Grid>
        
    </Box>
);