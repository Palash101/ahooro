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
import { Divider, Typography } from '@mui/material';


export default function ShowSearch({ modalOpen, setModalOpen, data }) {
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
                                <Typography sx={{ fontWeight: 600, mb: 2 }} variant='subtitle1'>Buscar número guardado</Typography>
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
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map((row ,index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.phone}
                                                    </TableCell>
                                                    <TableCell align="left">{row.city}</TableCell>
                                                    <TableCell align="left">{row.ip}</TableCell>
                                                    <TableCell align="left">{row.region}</TableCell>
                                                    <TableCell align="left">{Date(row.timestamp)}</TableCell>
                                                </TableRow>
                                            ))}
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
