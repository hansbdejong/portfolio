import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    CardActions
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";


function createCard() {

    const image = require('../images/about-diving.jpg')
    return (
        <div >

            <Card style={{
                position: 'relative'
            }}

            // sx={{
            //     '&:hover': {
            //         backgroundColor: grey[100]
            //     }
            // }}
            >

                <CardActionArea
                    component={Link}
                    to={`projects/about-me`}>
                    <CardMedia
                        component="img"
                        image={image}
                        style={{
                            objectFit: "cover",
                            aspectRatio: '1.2',
                            position: 'relative'
                        }}
                    />
                </CardActionArea>

                <Typography variant="h6" sx={{ textAlign: "center", pt: 1}}>
                    Fifa World Cup
                </Typography>


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CardActions>
                        <Button size="small"
                            color="primary"
                            component={Link}
                            to={`projects/about-me`}>
                            See Project
                        </Button>
                    </CardActions>
                </div>

            </Card>
        </div >
    )
}




function Projects() {
    return (
        <div style={{ width: "85%", margin: "auto" }}>
            <Typography
                variant="h3"
                color="textSecondary"
                align='center'
                component="h2"
                gutterBottom
            >
                My Projects
            </Typography>


            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {createCard()}
                </Grid>
            </Grid>

            <Typography>
                Projects to include:
                1. Fifa world cup
                2. Photo Sharing App
                3. Our breathing planet
                4. Breathing coral reefs
                5. Water sampler
                6. autopump
                7. AI Project
                8. AI Project 2
                9. Chris Project
                10. SPARC
            </Typography>


        </div >
    );
}

export default Projects;