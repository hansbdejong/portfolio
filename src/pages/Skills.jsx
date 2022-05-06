import React from 'react';
import {
    Typography,
    Paper
} from '@mui/material';
import profilePic from '../images/logos/java-logo.jpg'; // with import

function Skills() {
    return (
        <div style={{ width: "85%", margin: "auto" }}>
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
                sx={{ fontSize: 20, color: '#212529' }}
                gutterBottom
            >
                Over the last few years I have worked with a wide range of technologies for research, personal projects, and coursework. As I have gained more experience, it has become easier and easier to pick up new computer languages and frameworks.
            </Typography>

            <Paper elevation={3}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    gridGap: '40px',
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    paddingLeft: "20px",
                    PaddingRight: "20px"
                }}>
                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginTop: "20px",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"        
                        width="100%"
                        src={profilePic}
                    />

                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginTop: "20px",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"
                        height="60"
                        width="60"
                        src={profilePic}
                    />

                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginTop: "20px",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"
                        height="60"
                        width="60"
                        src={profilePic}
                    />

                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginTop: "20px",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"
                        height="60"
                        width="60"
                        src={profilePic}
                    />

                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginTop: "20px",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"
                        height="60"
                        width="60"
                        src={profilePic}
                    />

                    <img
                        alt=""
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            border: "1px solid #ECECEC"
                        }}
                        loading="lazy"
                        height="60"
                        width="60"
                        src={profilePic}
                    />
                </div>
            </Paper>
        </div>
    );
}

export default Skills;