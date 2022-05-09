import React from 'react';
import {
    Typography,
    Button,
    Link,
    Box
} from '@mui/material';
import diving from '../images/about-diving.jpg'; // with import
import penguins from '../images/about-penguins.jpg'; // with import
import { grey } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import resume from '../Hans_DeJong_Resume.pdf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddIcon from '@mui/icons-material/Add';
import LaunchIcon from '@mui/icons-material/Launch';


function MyStory() {
    return (
        <div>
            <div style={{
                backgroundColor: "white",
                position: "fixed",
                margin: "-24px",
                width: "100%",
                height: "50px",
                display: "flex",
                alignContent: "center",
                borderBottom: `1px solid ${grey[300]}`
            }}>
                <Button sx={{ pl: 2, pr: 3, borderRadius: 0 }}  >
                    <ArrowBackIcon />
                    <Typography sx={{ pl: 1 }}>Back</Typography>
                </Button>
            </div>


            <div style={{
                width: "90%",
                margin: "auto",
                paddingBottom: "60px",
                paddingTop: "60px"
            }}>

                <div style={{ display: "flex" }}>
                    <div style={{ width: "75%" }}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{ color: '#212529', fontWeight: 300 }}
                        >
                            Our Breathing Planet
                        </Typography>


                        <Typography
                            variant="body1"
                            sx={{ color: '#212529', fontSize: "18px" }}
                            gutterBottom
                        >
                            This game pits two students against each other to test their knowledge of various computer science topics! Players begin by entering their names and selecting topics. Then they are fed questions until one of them has gotten five right. They are then taken to a page that displays the winner and further information, as well as giving them an opportunity to play again
                        </Typography>


                    </div>
                    <div style={{ width: "25%", paddingLeft: "25px" }}>

                        <Typography
                            variant="h6"
                            sx={{ color: '#212529' }}
                        >
                            SKILLS
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: '#212529' }}


                        >
                            <ul style={{
                                paddingLeft: "25px",
                                color: "#00000099", marginTop: "8px"
                            }} >
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Axios</li>
                                <li>D3.js</li>
                                <li>Microsoft Azure Cloud</li>
                                <li>Object-Relational Mapping</li>
                            </ul>


                        </Typography>

                        <Link rel="noopener" href="https://google.com" target="_blank" underline="none">
                            <Button style={{ width: "100%", textTransform: 'none', }}
                                variant="contained"
                                sx={{ marginBottom: 1 }}>
                                <GitHubIcon fontSize="medium" />
                                <Typography sx={{ paddingLeft: 1 }}>GitHub Repo</Typography>
                            </Button>
                        </Link>

                        <Link rel="noopener" href="https://google.com" target="_blank" underline="none">
                            <Button style={{ width: "100%", textTransform: 'none', }}
                                variant="contained"
                                sx={{ marginBottom: 1 }}>
                                <LaunchIcon fontSize="medium" />
                                <Typography sx={{ paddingLeft: 1 }}>Live Demo</Typography>
                            </Button>
                        </Link>



                    </div>


                </div>





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


            </div >
        </div>
    );
}


export default MyStory;