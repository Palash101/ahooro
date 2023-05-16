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


export default function AddNumber({ addModalOpen, setAddModalOpen }) {
    const [phone, setPhone] = useState("")
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checkedMsg, setCheckedMsg] = useState("")


    const getLocation = (ip) => {
        return fetch(`https://ipapi.co/${ip}/json/`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
    }

    const SavedData = async () => {
        if (phone) {
            setLoading(true)
            fetch('https://api.ipify.org?format=json', {
                method: "GET",
                headers: {
                }
            })
                .then((res) => res.json())
                .then(async (data) => {
                    const { city, region } = await getLocation(data.ip)
                    console.log(region, "loc")
                    const ts = new Date();

                    const d = {
                        ip: data.ip,
                        phone: phone,
                        timeStamp: ts,
                        city: city,
                        region: region
                    }
                    const result = await createLead(d)
                    if (result.success) {
                        setLoading(false)
                        setCheckedMsg("subido con éxito")
                        setAlert(true)
                        setPhone("")
                        setAddModalOpen(false);
                    }
                    else {
                        setLoading(false)
                    }
                })
        }
        else {
            setCheckedMsg("Por favor ingrese un número de teléfono válido")
            setAlert(true)
        }
    };


    const handleClose = () => {
        setAddModalOpen(false);
    };

    return (
        <>
            <Dialog
                sx={{
                    "& .MuiPaper-root": {
                        m: 0,
                        p: 4,
                        width: "40%",
                    }
                }}
                open={addModalOpen}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Box sx={{ p: 0, maxWidth: "100%" }} >
                    <Box sx={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        boxSizing: "border-box",
                        background: "white",
                        p: 2
                    }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0
                            }}>
                            <CloseIcon />
                        </IconButton>
                        <Box sx={{
                            height: "100%",
                            overflowX: "auto",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <TextField
                                size='small'
                                type='number'
                                placeholder='Add a new number'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Box>
                    </Box>
                </Box>
                <DialogActions>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Buttons onClick={SavedData} >Añade un número</Buttons>
                    </Box>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={alert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={2000}
                message={checkedMsg}
                onClose={() => setAlert(false)}
            />
            {loading &&
                <PageLoader />
            }
        </>
    )
}
