import React from 'react';
import {
    Typography,
    Chip,
    Divider,
    Paper,
    List,
    ListItem
} from '@mui/material';

import { grey } from '@mui/material/colors';
import {skillsData} from '../data/skillsData.js'

let PhDSkills = [
    "Problem solving",
    "Ability to learn quickly",
    "Willingness to work hard and work under pressure",
    "Ability to work in a collaborative, team-oriented environment",
    "Communication skills such as explaining, technical writing, and public speaking",
    "Creativity, resourcefulness, and ability to persevere",
    "Ability to function independently in a variety of environments and roles; skills to handle ambiguity and differing views",
    "Expertise in designing, implementing, and managing all phases of complex projects through completion"
]



function addPhDSkills() {
    let skillsArray = []
    for (let i = 0; i < PhDSkills.length; i++) {
        let skill = (
            <ListItem sx={{ display: 'list-item' }} style={{ padding: 0 }}>
                <Typography variant='body1'>{PhDSkills[i]}</Typography>
            </ListItem>
        )

        skillsArray.push(skill);
    }

    return skillsArray;
}

function addChips(items) {
    let chips = [];
    for (let j = 0; j < items.length; j++) {
        let item = (
            <Chip label={items[j]} sx={{ mr: 1, mt: 1, backgroundColor: grey[100]}} variant="outlined" />
        )
        chips.push(item)
    }

    return chips;
}

function addSkills() {
    let skills = [];

    for (let i = 0; i < skillsData.length; i++) {
        let title = (
            <Typography variant="body1" sx={{ color: '#212529' }}>
                {skillsData[i].title}
            </Typography>
        );

        skills.push(title)

        let items = skillsData[i].items;

        let chipsDiv = (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {addChips(items)}
            </div>
        )

        skills.push(chipsDiv);


        if (i < skillsData.length - 1) {
            let divider = (
                <Divider sx={{ mt: 4, mb: 1 }} />
            )
            skills.push(divider)
        }
    }
    return skills;
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

            <Typography variant="body1" >
                Over the last few years I have worked with a wide range of technologies for research, personal projects, and coursework.
            </Typography>

            <Paper sx={{ padding: "7%", mt: 3, mb: 3 }}>
                {addSkills()}
            </Paper>

            <Typography variant="body1">
                During my PhD at Stanford I also developed a wide range of skills that are directly relevant to software engineering positions. These include:
            </Typography>

            <List sx={{ listStyleType: 'disc', pl: 4 }}>
                {addPhDSkills()}
            </List>

        </div>
    );
}

export default Skills;