import React, { useState } from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';  //aboutme
import LanguageIcon from '@mui/icons-material/Language'; // adventures
import FolderIcon from '@mui/icons-material/Folder'; // projects
import SchoolIcon from '@mui/icons-material/School';  // courses
import ArticleIcon from '@mui/icons-material/Article'; // publications
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // skills
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // linkedIn
import ContactPageIcon from '@mui/icons-material/ContactPage'; // resume

import { useHistory } from "react-router-dom";
import resume from '../Hans_DeJong_Resume.pdf';

import {
    IconButton,
    Box,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    Link

} from '@mui/material';

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


export default function SwipeableTemporaryDrawer() {

    const [openDrawer, setOpenDrawer] = useState(false);
    const history = useHistory()

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpenDrawer(open)
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding
                        onClick={() => history.push(item.path)}>
                        <ListItemButton>

                            <ListItemIcon>
                                {getIcon(item.text)}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>

                <Link disablePadding href={resume} target="_blank" underline="none" >
                    <ListItem key={"Resume"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ContactPageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resume" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link disablePadding href="https://www.linkedin.com/in/hansbdejong/"
                    target="_blank" underline="none" >
                    <ListItem key={"LinkedIn"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>



        </Box >
    );

    let anchor = 'right';
    return (
        <div>

            <IconButton
                style={{
                    backgroundColor: "#C2E0FF",
                    position: "fixed",
                    right: "10px",
                    top: "5px",
                    height: "40px",
                    width: "40px",
                    zIndex: 199,
                }}
                onClick={toggleDrawer(anchor, true)}>
                <MenuIcon sx={{ color: "#004C99" }} />
            </IconButton>


            <SwipeableDrawer
                anchor={anchor}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list(anchor)}
            </SwipeableDrawer>


        </div >
    );
}


function getIcon(text) {
    switch (text) {
        case 'About Me':
            return <PersonIcon />;
        case 'Projects':
            return <FolderIcon />;
        case 'Skills':
            return <LightbulbIcon />;
        case 'Courses':
            return <SchoolIcon />;
        case 'Publications':
            return <ArticleIcon />;
        case 'Adventures':
            return <LanguageIcon />;
        default:
            return <PersonIcon />;
    }
}


