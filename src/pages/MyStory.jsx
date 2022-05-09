import React from 'react';
import {
    Typography,
    Button,
    Link
} from '@mui/material';
import diving from '../images/about-diving.jpg'; // with import
import penguins from '../images/about-penguins.jpg'; // with import
//import { grey } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import resume from '../Hans_DeJong_Resume.pdf';



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

            
            <div style={{display:"flex", justifyContent:"center", paddingBottom: "20px"}}>
            <div>
                <Link rel="noopener" href="https://www.linkedin.com/in/hansbdejong/" target="_blank" underline="none">
                    <Button disableRipple style={{ textTransform: 'none' }}>
                        <LinkedInIcon fontSize="medium" />
                        <Typography sx={{  paddingLeft: 0.5 }}>LinkedIn</Typography>
                    </Button>
                </Link>

                <Link sx={{ marginLeft: 1 }} href={resume} target="_blank" underline="none" >
                    <Button disableRipple
                        style={{ textTransform: 'none' }}
                    >
                        <ArticleIcon fontSize="medium" />
                        <Typography sx={{  paddingLeft: 0.5 }}>Resume</Typography>
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


            <Typography
                variant="body1"
                sx={{ color: '#212529', fontSize: "18px" }}
                gutterBottom
            >
                <p>I am a Computer Science master’s student at the <span style={{ fontWeight: 600 }}>University of Pennsylvania</span> and am launching a career change from earth science research to technology.</p>
                <p>I completed a PhD at <span style={{ fontWeight: 600 }}>Stanford University</span> in Oceanography as a <span style={{ fontWeight: 600 }}>National Science Foundation Graduate Research Fellow</span>, where I designed, implemented, and managed complex projects through completion. My research focused on the carbon system in the Ross Sea, Antarctica, which involved computer modelling and analyzing large satellite-derived and oceanographic datasets. I also designed and built autonomous instruments for ocean acidification research on coral reefs.</p>
                <p>As a scientist, I learned how to persevere through major roadblocks and developed relevent skills in collaboration, communication, and problem solving. Since pursuing my Masters in Computer Science, I have improved my technical skills through coursework and projects and am seeking an internship position that will allow me to tackle interesting problems in a collaborative environment.</p>
                <p>I am also an experienced educator and recently taught Computer Science to high school students at the American International School Chennai in India. Collaborating with a Stanford professor, my Computer Science course was based on CS 106A, taken by over 1000 students at Stanford each year.</p>
                <p>On the personal front, I was born in the US and grew up in India and Madagascar. I have also lived in Mali and South Korea. I love to go backpacking and play soccer.</p>
            </Typography>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "50px",
            }}>
                <img
                    alt=""
                    style={{
                        width: "48%",
                    }}
                    loading="lazy"
                    src={diving}
                />

                <img
                    alt=""
                    style={{
                        width: "48%",
                    }}
                    loading="lazy"
                    src={penguins}
                />

            </div>
        </div>
    );
}


export default MyStory;