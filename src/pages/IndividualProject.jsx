import React from 'react';
import {
    Typography,
    Button,
    Link,
    Grid,
    List,
    ListItem,
    Divider
} from '@mui/material';

import { useParams, useHistory } from "react-router-dom";

// data imports
import { courseProjectsData } from '../data/courseProjectsData.js'
import { quaeroData } from '../data/quaeroData.js'
import { cipData } from '../data/cipData.js'
import { fifaData } from '../data/fifaData.js'
import { datePickerData } from '../data/datePickerData.js'
import { photoAppData } from '../data/photoAppData.js'
import { breathingPlanetData } from '../data/breathingPlanetData.js'
import { samplerData } from '../data/samplerData.js'
import { flightsData } from '../data/flightsData.js'



import { grey } from '@mui/material/colors';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

let data = {}

function IndividualProject() {

    let { id } = useParams();

    switch (id) {
        case 'quaero':
            data = quaeroData;
            break;
        case 'cip':
            data = cipData;
            break;
        case 'fifa':
            data = fifaData;
            break
        case 'photo-app':
            data = photoAppData;
            break;
        case 'breathing-planet':
            data = breathingPlanetData;
            break;
        case 'water-sampler':
            data = samplerData;
            break
        case 'flight-delays':
            data = flightsData;
            break;
        case 'date-picker':
            data = datePickerData;
            break
        default:
            data = courseProjectsData;
    }



    const history = useHistory()

    return (
        <div>

            {topBar(history)}

            <div style={{
                width: "90%",
                margin: "auto",
                paddingBottom: "60px",
                paddingTop: "60px"
            }}>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} lg={9}>
                        {projectDescription(data)}
                    </Grid>


                    <Grid item xs={12} md={6} lg={3}>
                        {skills(data)}
                        {addLinkButtons(data)}
                    </Grid>

                </Grid>

                <Divider style={{ marginTop: "30px", marginBottom: "30px" }} />

                <Typography
                    variant="h5"
                    gutterTop
                    sx={{ color: '#212529' }}
                >
                    ScreenShots
                </Typography>

                {addImagesWithCaptions(data)}


            </div >
        </div>
    );
}

export default IndividualProject;


// uses the params to set the data



// top bar with back button
function topBar(history) {
    return (
        <div style={{
            zIndex: 99,
            backgroundColor: "white",
            position: "fixed",
            margin: "-24px",
            width: "100%",
            height: "50px",
            display: "flex",
            alignContent: "center",
            borderBottom: `1px solid ${grey[300]}`
        }}>
            <Button
                sx={{ pl: 2, pr: 3, borderRadius: 0 }}
                onClick={() => history.push("/projects")} >
                <ArrowBackIcon />
                <Typography sx={{ pl: 1 }}>Back</Typography>
            </Button>
        </div>
    )
}


// project title and description
function projectDescription(data) {

    return (
        <>
            <Typography
                variant="h3"
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                {data.title}
            </Typography>

            {addParagraphs(data)}

        </>
    )
}

function skills(data) {
    return (
        <>
            <Typography
                variant="h6"
                sx={{ color: '#212529' }}
            >
                SKILLS
            </Typography>


            <List sx={{ listStyleType: 'disc', pl: 3, mb: 2 }}>
                {addListItems(data)}
            </List >

        </>
    )
}

// button for external links
function addLinkButtons(data) {
    let links = data.links;

    if (links) {
        let buttons = []
        for (let i = 0; i < links.length; i++) {
            let url = links[i].url;
            let label = links[i].label;
            let type = links[i].type;

            let button = (
                <Link rel="noopener" href={url} target="_blank" underline="none">
                    <Button style={{ width: "100%", textTransform: 'none', }}
                        variant="contained"
                        sx={{ marginBottom: 1, maxWidth: "200px", marginRight:1 }}>
                        {createIcon(type)}
                        <Typography sx={{ paddingLeft: 1 }}>{label}</Typography>
                    </Button>
                </Link>
            )

            buttons.push(button)
        }

        return buttons;
    }
}

// get's correct icon
function createIcon(type) {
    if (type === "demo") {
        return <LaunchIcon fontSize="medium" />
    } else if (type === "github") {
        return <GitHubIcon fontSize="medium" />
    } else if (type === "publication") {
        return <ArticleIcon fontSize="medium" />
    }

    return <YouTubeIcon fontSize="medium" />
}

function addImagesWithCaptions(data) {
    let images = data.images;
    let toReturn = [];

    if (images) {
        for (let i = 0; i < images.length; i++) {
            let imageFromUrl = require(`../images/${images[i].url}`)
            let caption = images[i].caption

            let image = (
                <div style={{
                    display: "flex",
                    //border: "1px solid red",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "60px",
                }}>

                    <div style={{
                        border: `1px solid ${grey[400]}`,
                        width: "85%",
                        padding: "3px",

                    }}>
                        <img
                            alt=""
                            style={{
                                width: "100%",
                                display: "block"
                            }}
                            // loading="lazy"
                            src={imageFromUrl}
                        />
                    </div>

                    <Typography variant="body2"
                        color="textSecondary"
                        style={{
                            width: "85%",
                            //border: "1px solid black",
                            paddingLeft: "3px",
                            paddingRight: "3px"

                        }}>
                        {caption}
                    </Typography>

                </div>

            )

            toReturn.push(image)
        }
    }

    return toReturn;

}



function addListItems(data) {

    let listItems = data.skills;
    let toReturn = []

    for (let i = 0; i < listItems.length; i++) {
        let listItem = (
            <ListItem sx={{ display: 'list-item', color: "#00000099" }}
                style={{ padding: 0 }}>
                <Typography variant='body2' color="textSecondary"
                >
                    {listItems[i]}
                </Typography>
            </ListItem>
        )
        toReturn.push(listItem)
    }

    return toReturn;
}


function addParagraphs(data) {

    let paragraphArray = data.paragraphs;
    let paragraphs = [];

    //color: '#212529', fontSize: "18px",

    for (let i = 0; i < paragraphArray.length; i++) {
        let paragraph = (
            <Typography
                variant="body1"
                sx={{ pt: 2 }}
            >
                {paragraphArray[i]}
            </Typography>
        )
        paragraphs.push(paragraph)
    }

    return paragraphs;
}

