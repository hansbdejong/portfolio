import React from 'react';
import { Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    Box,
    Typography
} from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import profilePic from '../images/Hans.jpg'; // with import



function SideBar() {

    // another color idea: "#1164A3"

    let drawerWidth = 350;
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Box sx={{ overflow: 'auto', bgcolor: "#282C34" }} style={{ height: "100%" }}>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        alt=""
                        style={{
                            // borderRadius: "100%",
                            objectFit: "cover",
                            marginTop: "45px",
                            border: `5px solid ${grey[400]}`
                        }}
                        loading="lazy"
                        height="250"
                        width="250"
                        src={profilePic}
                    />
                </div>

                <Typography variant="h5" align="center"
                    style={{
                        paddingTop: "10px",
                        color: grey[200], textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)",
                        fontSize: "30px"
                    }}>
                    Hans B DeJong
                </Typography>

                <List>

                    <ListItem button className="example"
                        style={{ paddingLeft: "45px", color: "#61DAFB" }}
                        component={Link}
                        to={`/world-cups`}
                        sx = {{'&:hover': {
                            backgroundColor: '#20232A'
                          }}}
                        >
                        <Typography variant="h6">My Story</Typography>
                    </ListItem>


                    <ListItem button style={{ paddingLeft: "45px", color: "#999999" }}
                        component={Link}
                        to={`/world-cups`}>
                        <Typography variant="h6">Projects</Typography>
                    </ListItem>

                    <ListItem button style={{ paddingLeft: "45px", color: "#999999" }}
                        component={Link}
                        to={`/world-cups`}>
                        <Typography variant="h6">Skills</Typography>
                    </ListItem>

                    <ListItem button style={{ paddingLeft: "45px", color: "#999999" }}
                        component={Link}
                        to={`/world-cups`}>
                        <Typography variant="h6">Courses</Typography>
                    </ListItem>

                    <ListItem button style={{ paddingLeft: "45px", color: "#999999" }}
                        component={Link}
                        to={`/world-cups`}>
                        <Typography variant="h6">Publications</Typography>
                    </ListItem>

                    <ListItem button style={{ paddingLeft: "45px", color: "#999999" }}
                        component={Link}
                        to={`/world-cups`}>
                        <Typography variant="h6">Adventures</Typography>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}


export default SideBar;