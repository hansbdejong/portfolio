import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    Box,
    Typography
} from '@mui/material';
import { grey} from '@mui/material/colors';
import profilePic from '../images/Hans.jpg'; // with import
import './style.css';



export default function SideBar() {

    const menuItems = [
        {
            text: 'My Story',
            path: '/my-story'
        },
        {
            text: 'Projects',
            path: '/projects'
        },
        {
            text: 'Skills',
            path: '/skills'
        },
        {
            text: 'Courses',
            path: '/courses'
        },
        {
            text: 'Publications',
            path: '/publications'
        },
        {
            text: 'Adventures',
            path: '/adventures'
        },
    ];


    // another color idea: "#1164A3"
    const location = useLocation();
    const history = useHistory()

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

                    {menuItems.map((item =>
                        <ListItem button disableRipple

                            style={{ paddingLeft: "45px", color: "#999999" }}
                            onClick={() => history.push(item.path)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#20232A'
                                }
                            }}
                        >
                            <Typography
                                className={location.pathname === item.path ? "myClass" : null} variant="h6">
                                {item.text}
                            </Typography>
                        </ListItem>
                    ))}

                </List>
            </Box>
        </Drawer>
    );
}

