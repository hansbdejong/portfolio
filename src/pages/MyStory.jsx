import React from 'react';
import {
    Typography,
    Button,
    Link,
    List,
    ListItem
} from '@mui/material';


//import { grey } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import resume from '../Hans_DeJong_Resume.pdf';


let data = {
    paragraphs:
        [
            "I am an aspiring software engineer with years of experience as an oceanographer and educator that allowed me to develop excellent analytical and communication skills. I graduated in December 2022 from the University of Pennsylvania with a master’s degree in Computer and Information Technology (MCIT) and completed additional graduate level computer science courses at Stanford. I am seeking to combine my scientific and educational experiences with my deepening understanding of technology to join a development team.",
            "Since enrolling in the MCIT program, I have gained valuable experience and technical skills in distributed systems, databases, computer networks, cybersecurity, artificial intelligence, machine learning, big data, cloud computing, and web applications. My passion for user-centered design and clean/maintainable code elevates my projects to the next level. ",
            "I have also completed a PhD at Stanford University in Oceanography as a National Science Foundation Graduate Research Fellow, where I designed, implemented, and managed complex projects through completion. My research focused on the carbon system in the Ross Sea, Antarctica, which involved collaborative research cruises, computer modelling, and analyzing large satellite-derived and oceanographic datasets. I also designed and built autonomous instruments for ocean acidification research on coral reefs.",
            "I am an experienced educator and recently taught computer science to high school students at the American International School Chennai in India. Collaborating with a Stanford professor, my computer science course was based on CS 106A, taken by over 1000 students at Stanford each year.",
            "Career Highlights:",
        ],
    skills:
        [
            "Years of experience solving technically complex problems.",
            "Strong communication skills such as explaining, public speaking, and technical writing.",
            "Exceptional ability to learn, process, utilize, and communicate new ideas quickly and effectively.",
            "Proven track record in collaborative, team-oriented environments.",
            "Ability to function independently and handle ambiguity.",
            "Natural leadership abilities.",
        ]
}

// after just a year, taken advanced CS courses designed for advanced undergraduate...
// I also learned how to handle ambiguity and ....
// these "soft skills are direclty relevent to tech jobs"

function MyStory() {
    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px" }}>
            <Typography
                variant="h3"
                align='center'
                gutterBottom
                sx={{ color: '#212529', fontWeight: 300 }}
            >
                About Me
            </Typography>


            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "20px" }}>
                <div>
                    <Link rel="noopener" href="https://www.linkedin.com/in/hansbdejong/" target="_blank" underline="none">
                        <Button disableRipple style={{ textTransform: 'none' }}>
                            <LinkedInIcon fontSize="medium" />
                            <Typography sx={{ paddingLeft: 0.5 }}>LinkedIn</Typography>
                        </Button>
                    </Link>

                    <Link sx={{ marginLeft: 1 }} href={resume} target="_blank" underline="none" >
                        <Button disableRipple
                            style={{ textTransform: 'none' }}
                        >
                            <ArticleIcon fontSize="medium" />
                            <Typography sx={{ paddingLeft: 0.5 }}>Resume</Typography>
                        </Button>
                    </Link>

                    <Link sx={{ marginLeft: 1 }} rel="noopener" href="https://github.com/hansbdejong" target="_blank" underline="none">
                        <Button disableRipple style={{ textTransform: 'none' }}>
                            <GitHubIcon fontSize="medium" />
                            <Typography sx={{ paddingLeft: 0.5 }}>GitHub</Typography>
                        </Button>
                    </Link>

                    <Link sx={{ marginLeft: 1 }} rel="noopener" href="https://scholar.google.com/citations?user=7KRThrQAAAAJ&hl=en" target="_blank" underline="none">
                        <Button disableRipple style={{ textTransform: 'none' }}>
                            <GoogleIcon fontSize="medium" />
                            <Typography sx={{ paddingLeft: 0.5 }}>Google Scholar</Typography>
                        </Button>
                    </Link>
                </div>
            </div>


            {addParagraphs(data)}


            <List sx={{ listStyleType: 'disc', pl: 4 }}>
                {addSkills(data)}
            </List>

        </div>
    );
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


function addSkills(data) {
    let skillsArray = []
    let skills = data.skills;

    for (let i = 0; i < skills.length; i++) {
        let skill = (
            <ListItem sx={{ display: 'list-item' }} style={{ padding: 0 }}>
                <Typography variant='body1'>{skills[i]}</Typography>
            </ListItem>
        )

        skillsArray.push(skill);
    }

    return skillsArray;
}


export default MyStory;