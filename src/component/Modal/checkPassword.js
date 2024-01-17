import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PageLoader from '../pageLoader';
import { Typography } from '@mui/material';


export default function CheckPasswordModal({ open, handleClose, password, setPassword, handleClick }) {
    const [alert, setAlert] = useState(false)
    // const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Dialog
                sx={{
                    "& .MuiPaper-root": {
                        m: 0,
                        p: 4,
                        borderRadius: "20px"
                    }
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Box sx={{ minWidth: "300px" }} >
                    <Typography sx={{ pb: 1 }}>Contraseña:</Typography>
                    <TextField
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <DialogActions>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Buttons onClick={handleClick}>ACCEDER</Buttons>
                    </Box>
                </DialogActions>
            </Dialog>
            {/* <Snackbar
                open={alert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={2000}
                message={checkedMsg}
                onClose={() => setAlert(false)}
            /> */}
            {/* {loading &&
                <PageLoader />
            } */}
        </>
    )
}
