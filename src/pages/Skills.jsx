import React from 'react';
import {
    Typography,
    Paper
} from '@mui/material';

import html from '../images/logos/html-logo.png';
import css from '../images/logos/css-logo.png';
import javascript from '../images/logos/Javascript-logo.png';
import reactLogo from '../images/logos/React-logo.png'
import reactRouter from '../images/logos/react-router-logo.jpg'
import nodeLogo from '../images/logos/nodejs-logo.png' 
import D3 from '../images/logos/D3-logo.png' 
import mui from '../images/logos/mui-logo.png'
import leaflet from '../images/logos/Leaflet-logo.png'
import charts from '../images/logos/chartsjs-logo.png'

import java from '../images/logos/java-logo.jpg'; // with import
import matlab from '../images/logos/MATLAB-logo.png';
import arduino from '../images/logos/arduino-logo.png';

let logos = [
    {
        logo: html,
        text: "HTML"
    },
    {
        logo: css,
        text: "CSS"
    },
    {
        logo: javascript,
        text: "JavaScript"
    },
    {
        logo: reactLogo,
        text: "React"
    },
    {
        logo: reactRouter,
        text: "React Router"
    },
    {
        logo: nodeLogo,
        text: "Node.js"
    },
    {
        logo: D3,
        text: "D3.js"
    },
    {
        logo: mui,
        text: "Material UI"
    },
    {
        logo: leaflet,
        text: "Leaflet"
    },
    {
        logo: charts,
        text: "Charts.js"
    }

]




function createLogos() {
    let logosArr = []
    for (let i = 0; i < logos.length; i++) {
        let logo = (
            <div>
                <img
                    alt=""
                    style={{
                        objectFit: "cover",
                    }}
                    loading="lazy"
                    width="100%"
                    src={logos[i].logo}
                />
                <Typography
                    variant="body1"
                    align="center"
                    sx={{ fontSize: 18, color: '#00000099' }}

                >
                    {logos[i].text}
                </Typography>
            </div>
        )
        logosArr.push(logo);
    }
    return logosArr;
}


function Skills() {
    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h3"
                align='center'
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                Skills
            </Typography>

            <Typography
                variant="body1"
                sx={{color: '#212529', paddingBottom: "40px" }}

            >
                Over the last few years I have worked with a wide range of technologies for research, personal projects, and coursework. As I have gained more experience, it has become easier and easier to pick up new computer languages and frameworks.
            </Typography>

            <Paper elevation={3}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    columnGap: '100px',
                    rowGap: '50px',
                    paddingTop: "60px",
                    paddingBottom: "60px",
                    paddingLeft: "60px",
                    paddingRight: "60px"
                }}>



                {createLogos()}


                </div>
            </Paper>
        </div>
    );
}

export default Skills;