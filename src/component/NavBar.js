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
import { Typography } from '@mui/material';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src="assets/image/Logo.png" alt='' />
            <Divider />
            <List>
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
                            sx={{ display: { xs: 'none', sm: 'block' } }}
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
                                <IconButton>
                                    <CallIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='BUTTON'>666-6666-666</Typography>
                                <Typography variant='caption'>Atendemos de 9:00 a 20:00</Typography>
                            </Box>
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </>
    )
}
