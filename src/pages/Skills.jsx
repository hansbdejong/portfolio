import React from 'react';
import {
    Typography,
    Chip,
    Divider,
    Paper,
    List,
    ListItem
} from '@mui/material';

// others to add - GDB, editors such as VIM, VsCode...

let data = [
    {
        title: "Programming Languages",
        items: ["Java", "Python", "JavaScript", "C++", "C", "MATLAB", "R",
            "Go", "Arduino", "IDL", "Fortran"]
    },
    {
        title: "Web Development",
        items: ["HTML", "CSS", "React", "Node.js", "Express", "REST API",
            "JSON", "DOM", "AJAX", "Material UI",
            "Bootstrap", "React Router", "D3", "Leaflet.js", "Charts.js"]
    },
    {
        title: "Databases",
        items: ["SQL", "MongoDB", "Firebase", "Neo4j"]
    },
    {
        title: "Data Science",
        items: ["Spark", "Pandas", "NumPy", "Matplotlib", "Seaborn",
            "Scikit-learn", "MxNet"]
    },
    {
        title: "Cloud",
        items: ["AWS Cloud Practitioner", "RDS", "EC2", "EMR"]
    },
    {
        title: "Tools",
        items: ["Git", "Vim", "GDB", "Linux Terminal", "LaTex", "JUnit", "Visual Studio", "Eclipse", "IntelliJ"]
    },
    {
        title: "Methodologies",
        items: ["Reading Documentation", "Agile Development", "TTD (Test Driven Development)",
            "Modularity", "Design Patterns", "N-Tier architecture",
            "Scalable Systems"]
    },
]

let PhDSkills = [
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
            <Chip label={items[j]} sx={{ mr: 1, mt: 1, backgroundColor: "white" }} variant="outlined" />
        )
        chips.push(item)
    }

    return chips;
}

function addSkills() {
    let skills = [];

    for (let i = 0; i < data.length; i++) {
        let title = (
            <Typography variant="body1" sx={{ color: '#212529' }}>
                {data[i].title}
            </Typography>
        );

        skills.push(title)

        let items = data[i].items;

        let chipsDiv = (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {addChips(items)}
            </div>
        )

        skills.push(chipsDiv);


        if (i < data.length - 1) {
            let divider = (
                <Divider sx={{ mt: 3, mb: 3 }} />
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
                During my PhD I also developed a wide range of skills that are directly relevant to software engineering positions. These include:

            </Typography>

            <List sx={{ listStyleType: 'disc', pl: 4 }}>

                {addPhDSkills()}
            </List>

        </div>
    );
}

export default Skills;