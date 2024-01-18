import React, { useEffect, useRef, useState } from 'react'
import PageLoader from '../component/pageLoader';
import { Box, CircularProgress, Divider, Grid, IconButton, InputBase, Menu, MenuItem, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { DeleteXlsx, DownloadXlsx, GetCsvList, GetPaymentList, saveCsvFile, saveXlxsFile } from '../controller/AuthController';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import Buttons from '../component/Button';
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { DeleteForever } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import CachedIcon from '@mui/icons-material/Cached';




function CircularProgressWithLabel(props) {
    return (
        <Box
            sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "#00000085",
                display: "flex",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <Box
                sx={{ position: "relative", display: "inline-flex", margin: "auto" }}
            >
                <CircularProgress variant="determinate" {...props} size={80} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ color: "#fff", fontSize: "18px" }}
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

const StyledInputBase = styled(InputBase)(() => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        //   padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //   transition: theme.transitions.create('width'),
        width: "100%",
        //   [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //       width: '20ch',
        //     },
        //   },
    },
}));


export default function Payments() {
    const [progress, setProgress] = useState(0);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [massage, setMassage] = useState("");
    const [menuHeight, setMenuHeight] = useState(0)
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [xlsxListData, setXlsxListData] = useState("");
    console.log("xlsxListData: ", xlsxListData);
    const navigate = useNavigate();
    const menuRef = useRef()

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };



    useEffect(() => {
        setMenuHeight(menuRef.current.clientHeight)
    }, [menuRef])


    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    function startInterval() {
        setProgress((prevProgress) => (prevProgress >= 99 ? 0 : prevProgress + 1));
    }

    function stopInterval(interval) {
        setProgress(100);
        setTimeout(() => {
            clearInterval(interval);
        }, 1000);
    }

    const handleClick = () => {
        const formData = new FormData();
        formData.append("file", file);
        if (file) {
            startInterval();
            const interval = setInterval(startInterval, 6000);
            setLoading(true)
            const saveData = saveXlxsFile(file);
            saveData.then((data) => {
                setTimeout(() => {
                    if (data.success) {
                        setMassage("Documento cargado exitosamente");
                        setOpen(true);
                        stopInterval(interval);
                        setFile(undefined);
                        setLoading(false)
                    } else {
                        stopInterval(interval);
                        setFile(undefined);
                        setLoading(false)
                    }
                }, 12000);
            });
        } else {
            setMassage("Seleccione un archivo");
            setOpen(true);
        }
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClose = (reason) => {
        setOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const getCsv = async () => {
        setLoading(true)
        const xlsx = await GetPaymentList();
        console.log("xlsx: ", xlsx);
        if (xlsx.success) {
            setXlsxListData(xlsx.data.items);
            setLoading(false)
        } else {
            setLoading(false)
            setMassage("Documento no encontrado");
            setOpen(true);
        }
    };

    useEffect(() => {
        getCsv()
    }, [])

    const downloadXlsx = async (name) => {
        setLoading(true);
        const getDownload = await DownloadXlsx(name);
        if (getDownload.success) {
            const link = document.createElement("a");
            link.href = getDownload.data;
            link.download = name;
            link.click();
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    const DeleteXlsxFile = async (name) => {
        setLoading(true);
        const getDelete = await DeleteXlsx(name);
        if (getDelete.success) {
            getCsv();
            setLoading(false);
        }
    }


    return (
        <>
            {progress > 0 && progress < 100 ? (
                <CircularProgressWithLabel value={progress} />
            ) : (
                <></>
            )}
            <Box sx={{ height: { md: `calc(97vh - ${menuHeight}px)`, xs: "auto" }, p: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }} ref={menuRef}>
                    <IconButton onClick={handleOpenUserMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {/* const settings = ["Profile", "Logout"]; */}
                        <MenuItem onClick={() => {
                            navigate("/upload-data")
                            handleCloseUserMenu()
                        }}>
                            <Typography textAlign="center">Autenticación</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <Box
                    sx={{
                        borderRadius: "12px",
                        border: "1px solid #FE545C",
                        height: "100%",
                    }}
                >
                    <Grid sx={{ height: "95%", p: "20px" }} spacing={"20px"} container>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #FE545C",
                                    height: "100%",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        boxSizing: "border-box",
                                        background: " rgba(255, 255, 255, 0.5)",
                                        py: "16px",
                                        px: "24px",
                                    }}
                                >
                                    <Box>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: {
                                                    xs: "center",
                                                    md: "flex-start",
                                                },
                                            }}
                                        >
                                            <Typography>
                                                Subida de múltiples contactos
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                position: { md: "absolute", xs: "relative" },
                                                width: "100%",
                                                top: { md: "50%", xs: 0 },
                                                left: { md: "50%", xs: 0 },
                                                transform: { md: "translate(-50%, -50%)", xs: "none" },
                                                display: "flex",
                                                flexDirection: "column",
                                                rowGap: 2
                                            }}
                                        >
                                            <Box sx={{ px: { md: "80px", xs: "0" }, display: "flex", flexDirection: "column" }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        border: "1px dashed black",
                                                        paddingY: "20px",
                                                        paddingX: "50px",
                                                        rowGap: 1,
                                                    }}
                                                    onDragOver={handleDrag}
                                                    onDrop={handleDrop}
                                                >
                                                    <img
                                                        src="/assets/image/cloudUpload.png"
                                                        alt="file"
                                                        width="80px"
                                                    />
                                                    <Buttons
                                                        sx={{ position: "relative", width: "80%" }}
                                                        variant="contained"
                                                    >
                                                        <input
                                                            accept=".xlsx"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                right: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                margin: 0,
                                                                fontSize: "23px",
                                                                cursor: "pointer",
                                                                opacity: 0,
                                                                direction: "ltr",
                                                            }}
                                                            className="input"
                                                            id="icon-button-file"
                                                            type="file"
                                                            name="..."
                                                            onChange={handleChange}
                                                            onClick={(event) => (event.target.value = null)}
                                                        />
                                                        <Typography>Selecciona archivo</Typography>
                                                    </Buttons>
                                                    {file ? (
                                                        <Typography
                                                            sx={{ fontSize: "15px", color: "green" }}
                                                        >
                                                            {file.name}
                                                        </Typography>
                                                    ) : (
                                                        <Typography sx={{ fontSize: "15px", color: "red" }}>
                                                            Elige un archivo
                                                        </Typography>
                                                    )}
                                                    <Typography sx={{ fontSize: "15px" }}>
                                                        o arrastra y suéltalos aquí
                                                    </Typography>
                                                    <Typography
                                                        sx={{ fontSize: "15px", fontWeight: 600 }}
                                                    >
                                                        .xlsx
                                                    </Typography>
                                                </Box>
                                                <Box mb={2}>
                                                    <Typography sx={{ fontSize: "12px" }}>
                                                        El límite es de 50.000 números
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <Buttons
                                                        onClick={handleClick}
                                                        sx={{ my: 1 }}
                                                        variant="contained"
                                                    >
                                                        Subir archivo
                                                    </Buttons>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "20px",
                            }}
                            xs={12}
                            md={6}
                        >
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #FE545C",
                                    height: { md: "100%", xs: "auto" }, // Ensures the Box takes full height on medium devices and auto height on extra small devices
                                    display: "flex",
                                    flexDirection: "column",
                                    p: 5
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography sx={{ fontWeight: 600, mb: 1 }} variant='subtitle1'>Listado de documentos</Typography>
                                        <IconButton onClick={() => getCsv()} size='small'>
                                            <CachedIcon />
                                        </IconButton>
                                    </Box>
                                    <Divider />
                                </Box>
                                <TableContainer component={Box} sx={{ flexGrow: 1, height: "150px", overflowY: 'auto' }}> {/* TableContainer grows to fill available space and is scrollable */}
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow sx={{ ".MuiTableCell-root": { fontWeight: 600 } }}>
                                                <TableCell>Teléfono</TableCell>
                                                <TableCell align="left">Descargalo</TableCell>
                                                <TableCell align="left">Borrar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {xlsxListData ?
                                            <TableBody>
                                                {xlsxListData.map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            <IconButton
                                                                onClick={() => downloadXlsx(row.name)}
                                                            >
                                                                <DownloadIcon color='success' />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            <IconButton
                                                                onClick={() => DeleteXlsxFile(row.name)}
                                                            >
                                                                <DeleteForever color='error' />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                            :
                                            <></>
                                        }
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "5%"
                        }}
                    >
                        <Buttons
                            onClick={() => {
                                localStorage.clear();
                                navigate("/");
                            }}
                        >
                            Cerrar Sesión
                        </Buttons>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={4000}
                onClose={handleClose}
                message={massage}
                action={action}
            />
            {loading && <PageLoader />}
        </>
    )
}
