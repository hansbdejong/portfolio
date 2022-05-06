import React from 'react';
import {
    Typography,
    Paper
} from '@mui/material';
import profilePic from '../images/logos/java-logo.jpg'; // with import
import html from '../images/logos/html-logo.png';
import css from '../images/logos/css-logo.png';
import matlab from '../images/logos/MATLAB-logo.png';
import arduino from '../images/logos/arduino-logo.png';

let logos = [profilePic, html, css, matlab, arduino];

function Skills() {
    return (
        <div style={{ width: "85%", margin: "auto", paddingBottom: "60px"  }}>
            <Typography
                variant="h2"
                align='center'
                gutterBottom
                sx={{ color: '#212529' }}
            >
                Skills
            </Typography>

            <Typography
                variant="body1"
                sx={{ fontSize: 20, color: '#212529', paddingBottom: "40px" }}
                
            >
                Over the last few years I have worked with a wide range of technologies for research, personal projects, and coursework. As I have gained more experience, it has become easier and easier to pick up new computer languages and frameworks.
            </Typography>

            <Paper elevation={3}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    gridGap: '100px',
                    paddingTop: "60px",
                    paddingBottom: "60px",
                    paddingLeft: "60px",
                    paddingRight: "60px"
                }}>
                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={profilePic}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>


                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={logos[0]}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>

                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={logos[1]}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>

                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={logos[2]}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>

                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={profilePic}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>

                    <div>
                        <img
                            alt=""
                            style={{                  
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            width="100%"
                            src={matlab}
                        />
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ fontSize: 20, color: '#00000099' }}
   
                        >
                            Java
                        </Typography>


                    </div>


                </div>
            </Paper>
        </div>
    );
}

export default Skills;