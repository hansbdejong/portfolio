import React from 'react';
import {
    Typography,
} from '@mui/material';

function Publications() {
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Typography
                variant="h3"
                color="textSecondary"
                align='center'
                component="h2"
                gutterBottom
            >
                My Publications
            </Typography>

        </div >
    );
}

export default Publications;