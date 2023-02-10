import React, { useState } from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom";

import {
    IconButton,
    Box,
    SwipeableDrawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
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
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>


        </Box>
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


