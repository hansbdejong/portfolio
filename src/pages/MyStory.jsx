import MediaQuery from 'react-responsive'
import React from 'react';
import {
    Typography,
    Button,
    Link,
    List,
    ListItem
} from '@mui/material';

import profilePic from '../images/Hans.jpg'; // with import
import { grey } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import resume from '../Hans_DeJong_Resume.pdf';


let data = {
    paragraphs:
        [
	  "I am a software engineer with a master’s degree in Computer Science from the University of Pennsylvania, specializing in distributed systems, databases, computer networks, web applications, security, big data analytics, and artificial intelligence. During my master's degree, I collaborated on team projects using Git, learned new frameworks by reading technical documentation, debugged code using Chrome Developer Tools, wrote regression tests, and conducted code reviews to deliver high quality products. My passion for user-centered design and clean, maintainable code elevates my projects to the next level.",
          "In addition to my computer science background, I hold a PhD in oceanography from Stanford where I developed highly relevant skills to software engineering. While analyzing terabytes of data and designing and building novel oceanographic instruments, I honed my problem-solving skills and attention to detail. Through peer-review, I improved my technical writing, learned how to view feedback as a learning opportunity, and engaged in cognitive conflict to drive progress. I also have a strong track record of initiating, designing, implementing, and managing complex projects to completion and collaborating cross-functionally with diverse teams across global research institutions.",
          "As an experienced secondary teacher with Teach For America and at American International Schools, I have developed strong leadership and mentorship skills. I have persevered through challenges and honed my communication skills while explaining complex scientific concepts to students. I believe that a supportive, respectful, and inclusive learning environment is essential for student success, and I actively fostered such an environment in my classrooms. I integrated peer tutoring and group projects to enhance students' collaboration and teamwork skills, and consistently set high expectations while providing strong support.",
          "With a diverse skill set and a passion for solving complex problems, I am eager to bring my expertise and experience to the software engineering industry. Let's connect to discuss how we can work together to achieve our goals."	            
        ],
    skills:
        [

        ]
}


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

            <MediaQuery maxWidth={900}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        alt=""
                        style={{
                            objectFit: "cover",
                            marginTop: "10px",
                            marginBottom: "10px",
                            border: `3px solid ${grey[400]}`
                        }}
                        loading="lazy"
                        height="200"
                        width="200"
                        src={profilePic}
                    />
                </div>
            </MediaQuery>


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