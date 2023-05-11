import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import Buttons from './Button';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function NavBar(props) {
    const navigate = useNavigate()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [width, setWidth] = useState(null)
    const [user, setUser] = useState(localStorage.getItem("user"))
    console.log("width: ", width);
    const ref = useRef(null)
    console.log("ref: ", ref);

    useEffect(() => {
        setWidth(ref.current.clientWidth)
    }, [width])

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const loginClick = () => {
        navigate('/sign-in')
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: 1 }}>
                <img src="assets/image/Logo.png" alt='' />
            </Box>
            <Divider />
            <List>
                {user &&
                    <Buttons onClick={() => navigate('/upload-data')}>Upload Data</Buttons>
                }
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "#82C5B6" }} component="nav">
                <Toolbar>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", px: { md: "150px", xs: 2 } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            sx={{ display: { xs: 'none', sm: 'flex' }, width: width, alignItems: "center" }}
                        >
                            <img src="assets/image/Logo.png" alt='' />
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", alignContent: "center" }}>
                            <Box>
                                <IconButton href="tel:+6666666666">
                                    <CallIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='BUTTON'>666-6666-666</Typography>
                                <Typography variant='caption'>Atendemos de 9:00 a 20:00</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: { md: "flex", xs: "none" } }} ref={ref}>
                            {user ?
                                <Box sx={{ display: { md: "flex", xs: "none" }, alignItems: "center", columnGap: 2 }}>

                                    {/* <Buttons onClick={() => {
                                        localStorage.clear()
                                        setUser(null)
                                    }}>Logout</Buttons> */}
                                    <Buttons onClick={() => navigate('/upload-data')}>Upload Data</Buttons>
                                </Box>

                                :
                                // <Buttons onClick={loginClick}>Login</Buttons>
                                <></>
                            }
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, justifyContent: "space-between" },
                    }}
                >
                    {drawer}
                    {/* <Box>
                        {user ?
                            <Buttons sx={{ width: "100%", height: "50px" }} onClick={() => {
                                localStorage.clear()
                                setUser(null)
                            }}>Logout</Buttons>
                            :
                            <Buttons sx={{ width: "100%", height: "50px" }} onClick={loginClick}>Login</Buttons>
                        }
                    </Box> */}
                </Drawer>
            </Box>
            <Toolbar />
        </>
    )
}
