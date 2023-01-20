import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    CardActions,
    styled
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`);

const projectsData = [
    {
        title: "Quaero",
        img: "quaero1.png",
        url: "quaero"
    },
    {
        title: "Code in Place",
        img: "cip.png",
        url: "cip"
    },
    {
        title: "FIFA World Cup",
        img: "fifa.png",
        url: "fifa"
    },
    {
        title: "Photo Sharing App",
        img: "photoApp.png",
        url: "photo-app"
    },
    {
        title: "Our Breathing Planet",
        img: "breathing1.png",
        url: "breathing-planet"
    },
    {
        title: "Automatic Water Sampler",
        img: "sampler.jpg",
        url: "water-sampler"
    },
    {
        title: "Flight Delay Predictions",
        img: "flights3.png",
        url: "flight-delays"
    },
    {
        title: "Date Picker",
        img: "datePicker.png",
        url: "date-picker"
    },
    {
        title: "Course Projects",
        img: "course-projects.png",
        url: "course-projects"
    },

]

function createCard(title, url, img) {

    const image = require(`../images/projects/${img}`)

    return (
        <div >
            <Card style={{ position: 'relative' }}>

                <CardActionArea
                    component={Link}
                    to={`projects/${url}`}
                >





                    <CardMedia
                        component="img"
                        image={image}
                        style={{
                            objectFit: "cover",
                            aspectRatio: '1',
                            position: 'relative',
                        }}

                    />

                    <Typography variant="h5" sx={{
                        fontSize: 18,
                        textAlign: "center", pt: 3, pb: 3
                    }}>
                        {title}
                    </Typography>
                </CardActionArea>

                {/* 
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CardActions>
                        <Button size="small"
                            color="primary"
                            component={Link}
                            to={`projects/about-me`}>
                            See Project
                        </Button>
                    </CardActions>
                </div> */}

            </Card>
        </div >
    )
}


function createCards() {
    let cards = [];

    for (let i = 0; i < projectsData.length; i++) {
        let card = (
            <Grid item xs={12} sm={6} md={4}>
                {createCard(projectsData[i].title, projectsData[i].url, projectsData[i].img)}
            </Grid>
        )

        cards.push(card);
    }

    return cards;
}



function Projects() {
    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h3"
                align='center'
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                Projects
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
            >
                From building a search engine from scratch to designing and constructing novel scientific instrumentation, I have thoroughly enjoyed the process of creating. 
            </Typography>
            
            
            <Grid container spacing={3} sx={{pt: 5}}>
                {createCards()}
            </Grid>

        </div >
    );
}

export default Projects;