import React from 'react';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';

import {courses} from '../data/courses.js'

function createAccordions() {
    let accordions = [];

    for (let i = 0; i < courses.length; i++) {
        let isExpanded = false;
        if (i < 7) {
            isExpanded = true;
        }
        //disableGutters
        let accordion = (
            <Accordion
                sx={{ border: `1px solid ${grey[200]}` }}
                elevation={3} defaultExpanded={isExpanded} >
                <AccordionSummary sx={{}}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6"
                        sx={{ color: '#212529', fontSize: 18 }}>
                        {courses[i].title}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ color: "#00000099", paddingBottom: 6 }}>
                    {courses[i].description}
                </AccordionDetails>
            </Accordion>
        )
        accordions.push(accordion);
    }
    return accordions;
}


function Courses() {


    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h3"
                align='center'
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                Courses
            </Typography>

            <Typography
                variant="body1"
                sx={{mb:3}}
            >
                I have thoroughly enjoyed studying Computer Science at the University of Pennsylvania and Stanford and have recieved top grades (A/A+) in all courses.
            </Typography>

            {createAccordions()}

        </div >
    );
}

export default Courses;

//<p>I am currently pursuing my masters in Computer and Information Technology (MCIT) at the <span style={{ fontWeight: '600' }}>University of Pennsylvania</span>. I am also taking graduate level computer science courses for credit through <span style={{ fontWeight: '600' }}>Stanford University</span> to strengthen my knowledge and skills.</p>