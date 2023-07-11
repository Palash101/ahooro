import Buttons from '../Button';
import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import Typography from '@mui/material/Typography';

export default function GetCsvListModal({ modalOpen, setModalOpen, data, downloadCsv, DeleteCsvList }) {
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
                                <Typography sx={{ fontWeight: 600, mb: 2 }} variant='subtitle1'>Buscar número de lista negra</Typography>
                                <Divider />
                                <TableContainer sx={{ width: "100%", minWidth: "600px" }} component={Box}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow sx={{ ".MuiTableCell-root": { fontWeight: 600 } }}>
                                                <TableCell>Teléfono</TableCell>
                                                <TableCell align="left">Descargalo</TableCell>
                                                <TableCell align="left">Borrar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map((row, index) => (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row}
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <IconButton
                                                            onClick={() => downloadCsv(index)}
                                                        >
                                                            <DownloadIcon color='success' />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <IconButton
                                                            onClick={() => DeleteCsvList(index)}
                                                        >
                                                            <DeleteForever color='error' />
                                                        </IconButton>
                                                    </TableCell>
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
