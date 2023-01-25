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
            text: 'About Me',
            path: '/'
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

    let drawerWidth = 300;
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Box sx={{ overflow: 'auto', bgcolor: "#282C34", border: "1px solid #282C34" }} 
            style={{ height: "100%"}}>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        alt=""
                        style={{
                            // borderRadius: "100%",
                            objectFit: "cover",
                            marginTop: "30px",
                            border: `3px solid ${grey[400]}`
                        }}
                        loading="lazy"
                        height="220"
                        width="220"
                        src={profilePic}
                    />
                </div>

                <Typography variant="h5" 
                    style={{
                        paddingTop: "10px",
                        color: grey[200], textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)",
                        fontSize: "24px",
                        marginLeft: "37px"
                    }}>
                    Hans B DeJong
                </Typography>

                <List>

                    {menuItems.map((item =>
                        <ListItem button disableRipple
                            key = {item.text}
                            style={{ paddingLeft: "37px", color: "#999999" }}
                            onClick={() => history.push(item.path)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#20232A'
                                }
                            }}
                        >
                            <Typography
                                className={getClassName(location.pathname, item.path)} 
                                variant="body1"
                                fontSize="18px">
                                {item.text}
                            </Typography>
                        </ListItem>
                    ))}

                </List>
            </Box>
        </Drawer>
    );
}


// sets the current sidebar location to light blue color
function getClassName(locationPathname, itemPath){
    
    // ensures that all project pages are part of the "Projects" tab.
    if(locationPathname.startsWith("/projects")){
        if (itemPath === "/projects"){
            return "myClass"
        }
    }

    // exact matches for all other tabs
    if (locationPathname === itemPath){
        return "myClass"
    } else {
        return null;
    }
}

//location.pathname.startsWith(item.path)


