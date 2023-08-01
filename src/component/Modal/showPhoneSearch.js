import React from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, IconButton, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


export default function ShowPhoneSearch({ modalOpen, setModalOpen, data, DownloadSms }) {
    console.log("data: ", data);
    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            {data &&
                <Dialog
                    sx={{
                        "& .MuiPaper-root": {
                            m: 0,
                            p: 2,
                            maxWidth: "100%",
                        }
                    }}
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogContent sx={{ p: 0, maxWidth: "100%", minHeight: "300px", maxHeight: "400px" }} >
                        <Box sx={{
                            borderRadius: "12px",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            boxSizing: "border-box",
                            background: "white",
                            p: 2
                        }}>
                            <Box sx={{ height: "100%", overflowX: "auto" }}>
                                <Typography sx={{ fontWeight: 600, mb: 2 }} variant='subtitle1'>Search Phone number</Typography>
                                <Divider />
                                <TableContainer sx={{ width: "100%" }} component={Box}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow sx={{ ".MuiTableCell-root": { fontWeight: 600 } }}>
                                                <TableCell>Teléfono</TableCell>
                                                <TableCell align="left">Ciudad</TableCell>
                                                <TableCell align="left">IP</TableCell>
                                                <TableCell align="left">Región</TableCell>
                                                <TableCell align="left">Fecha</TableCell>
                                                {data.sms_phone &&
                                                    <TableCell align="left">User sms</TableCell>
                                                }
                                                <TableCell align="left">download</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/* {data.map((row, index) => ( */}
                                            {data ?
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {data.phone}
                                                    </TableCell>
                                                    <TableCell align="left">{data.city}</TableCell>
                                                    <TableCell align="left">{data.ip}</TableCell>
                                                    <TableCell align="left">{data.region}</TableCell>
                                                    <TableCell align="left">{Date(data.timestamp)}</TableCell>
                                                    {data.sms_phone &&
                                                        <TableCell align="left">{data.sms_phone}</TableCell>
                                                    }
                                                    <TableCell align="center">
                                                        <IconButton onClick={() => DownloadSms(data.id)}>
                                                            <DownloadIcon color='primary' />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                                :
                                                <></>
                                            }
                                            {/* ))} */}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Buttons onClick={handleClose} >Cerrar</Buttons>
                        </Box>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
}
