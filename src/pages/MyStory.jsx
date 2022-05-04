import React from 'react';
import {
    Typography,
} from '@mui/material';




function MyStory() {
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Typography
                variant="h3"
                color="textSecondary"
                align='center'
                component="h2"
                gutterBottom
            >
                My Story
            </Typography>

            <Typography
                variant="h6"
                color="textSecondary"
                align='center'
                component="h2"
                gutterBottom
            >
                Let me tell you a story!
            </Typography>

        </div >
    );
}


export default MyStory;