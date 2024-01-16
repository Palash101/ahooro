import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { createLead } from '../../controller/AuthController';
import PageLoader from '../pageLoader';
import { Typography } from '@mui/material';


export default function CheckPasswordModal({ open, handleClose, password, setPassword, handleClick }) {
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

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
                        type="text"
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
            {loading &&
                <PageLoader />
            }
        </>
    )
}
