import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Buttons from '../component/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { DeleteBlackListNumber, SearchDoc, downloadData, saveBlackListCsvFile, saveCsvFile } from '../controller/AuthController';
import ShowSearch from '../component/Modal/showSearch';
import AddIcon from '@mui/icons-material/Add';
import { CircularProgress, Grid, InputLabel, TextField } from '@mui/material';
import { createLead } from '../controller/AuthController';
import { createBlackList } from '../controller/AuthController';
import { BlackListSearchDoc } from '../controller/AuthController';
import ShowBlackListSearch from '../component/Modal/showBlackListSearch';
import PageLoader from '../component/pageLoader';


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#00000085',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 9999
        }}>
            <Box sx={{ position: 'relative', display: 'inline-flex', margin: 'auto' }}>
                <CircularProgress variant="determinate" {...props} size={80} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" sx={{ color: '#fff', fontSize: '18px' }}>
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

const Search = styled('div')(() => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
}));

const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        //   padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //   transition: theme.transitions.create('width'),
        width: '100%',
        //   [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //       width: '20ch',
        //     },
        //   },
    },
}));

function UploadData() {
    const [file, setFile] = useState(undefined)
    const [blacklistFile, setBlacklistFile] = useState(undefined)
    const [search, setSearch] = useState("")
    const [blackListSearch, setBlackListSearch] = useState("")
    const [data, setData] = useState("")
    const [blackListNumber, setBlackListNumber] = useState("")
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [blackListModalOpen, setBlackListModalOpen] = useState(false)
    const [massage, setMassage] = useState("")
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0)
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [blackList, setBlackList] = useState("")
    const [download, setDownload] = useState("all_document")
    console.log("download: ", download);
    const [downloadSearch, setDownloadSearch] = useState("")


    // download documents

    const handleDownload = async () => {
        setLoading(true)
        const data = {
            downloadType: download === "all_document" || download === "all_record" ? 'multiple' : 'single',
            type: download === "all_document" || download === "one_document" ? 'pdf' : 'csv',
            query: downloadSearch
        }
        // console.log("data: ", data);
        const DownloadDocuments = await downloadData(data)
        // console.log("DownloadDocuments: ", DownloadDocuments.success);
        if (DownloadDocuments.success) {
            const link = document.createElement('a');
            link.href = DownloadDocuments.data;
            link.download = "file";
            link.click();
            setLoading(false)
        }
        else {
            setMassage("archivo no disponible");
            setLoading(false)
            setOpen(true);
        }
    }


    const handleChange = event => {
        setFile(event.target.files[0]);
    };

    // search phone no
    const HandleSearch = async () => {
        if (search) {
            setLoading(true)
            const value = await SearchDoc(search)
            if (value.success) {
                setData(value.data)
                setModalOpen(true)
            }
            else {
                console.log("wrong search")
                setMassage("Datos no encontrados")
                setOpen(true);
            }
            setLoading(false)
        }
        else {
            setMassage("Por favor ingrese el valor para la búsqueda")
            setOpen(true);
        }
    }

    // search blackList no

    const HandleBlackListSearch = async () => {
        if (blackListSearch) {
            setLoading(true)
            const value = await BlackListSearchDoc(blackListSearch)
            if (value.success) {
                setBlackListNumber(value.data)
                setBlackListModalOpen(true)
            }
            else {
                console.log("wrong search")
                setMassage("Datos no encontrados")
                setOpen(true);
            }
            setLoading(false)
        }
        else {
            setMassage("Por favor ingrese el valor para la búsqueda")
            setOpen(true);
        }
    }

    // delete blackList Number

    const DeleteNumber = async (data) => {
        setLoading(true)
        const deleteNumber = await DeleteBlackListNumber(data)
        console.log("deleteNumber: ", deleteNumber);
        if (deleteNumber.success === true) {
            setBlackListModalOpen(false);
            setLoading(false)
            setMassage("Eliminar el número de la lista negra de la lista")
            setOpen(true);
        }
    }

    // add phone No
    const SavePhoneNo = async () => {
        if (phone) {
            setLoading(true)
            // const ts = new Date();

            const d = {
                phone: phone,
                service: service
            }
            const result = await createLead(d)
            if (result.success) {
                setLoading(false)
                setMassage("subido con éxito")
                setOpen(true)
                setPhone("")
                setService("")
            }
            else {
                setLoading(false)
            }
        }
        else {
            setMassage("Por favor ingrese un número de teléfono válido")
            setOpen(true)
        }
    };


    // save blacklist No.
    const SaveBlackListNo = async () => {
        if (blackList) {
            setLoading(true)
            // const ts = new Date();

            const d = {
                phone: blackList,
            }
            const result = await createBlackList(d)
            if (result.success) {
                console.log("result: ", result);
                setLoading(false)
                setMassage("subido con éxito")
                setOpen(true)
                setBlackList("")
            }
            else {
                setLoading(false)
            }
        }
        else {
            setMassage("Por favor ingrese un número de teléfono válido")
            setOpen(true)
        }
    };

    const handleBlackListChange = event => {
        setBlacklistFile(event.target.files[0]);
    };

    // const saveBlackListFile = async () => {
    //     const formData = new FormData()
    //     formData.append('file', blacklistFile);
    //     if (blacklistFile) {
    //         console.log("blacklistFile: ", blacklistFile);
    //         const saveData = await saveBlackListCsvFile(formData)
    //         console.log("saveData: ", saveData);

    //     }
    //     else {
    //         setMassage("Seleccione un archivo")
    //         setOpen(true);
    //     }
    // }

    const saveBlackListFile = () => {
        const formData = new FormData()
        formData.append('file', blacklistFile);
        if (blacklistFile) {
            const interval = setInterval(startInterval, 1200)
            setLoading(true)
            const saveData = saveBlackListCsvFile(formData)
            saveData.then(data => {
                if (data.success) {
                    setMassage("Documento cargado exitosamente")
                    setOpen(true);
                    stopInterval(interval)
                    setLoading(false)
                }
                else {
                    console.log("data: ", data);
                    setMassage(data.error)
                    setOpen(true);
                    stopInterval(interval)
                    setLoading(false)
                }
                stopInterval(interval)
                console.log(data)
                setFile(undefined)
            })
        }
        else {
            setMassage("Seleccione un archivo")
            setOpen(true);
        }
    }


    const handleClick = () => {
        const formData = new FormData()
        formData.append('file', file);
        if (file) {
            const interval = setInterval(startInterval, 1200)
            setLoading(true)
            const saveData = saveCsvFile(formData)
            saveData.then(data => {
                if (data.success) {
                    setMassage("Documento cargado exitosamente")
                    setOpen(true);
                    stopInterval(interval)
                    setLoading(false)
                }
                stopInterval(interval)
                console.log(data)
                setFile(undefined)
            })
        }
        else {
            setMassage("Seleccione un archivo")
            setOpen(true);
        }

    }


    function startInterval() {
        setProgress((prevProgress) => (prevProgress >= 99 ? 0 : prevProgress + 1));

    }

    function stopInterval(interval) {
        setProgress(100);
        setTimeout(() => {
            clearInterval(interval);
        }, 1000)

    }

    const handleClose = (reason) => {
        setOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            HandleSearch()
        }
    }

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
    return (
        <>

            {(loading === true && progress > 0 && progress < 100) ?
                <CircularProgressWithLabel value={progress} />
                :
                <></>
            }
            <Box sx={{ height: { md: "97vh", xs: "auto" }, p: 1 }}>
                <Box sx={{
                    borderRadius: "12px",
                    border: "1px solid #FE545C",
                    height: "100%",
                }}>
                    <Grid sx={{ height: "90%" }} container>
                        <Grid sx={{
                            padding: "20px 10px 20px 20px"
                        }} item xs={12} md={5}>
                            <Box sx={{
                                borderRadius: "12px",
                                border: "1px solid #FE545C",
                                height: "100%",
                                position: "relative",

                            }}>
                                <Box sx={{
                                    boxSizing: "border-box",
                                    background: " rgba(255, 255, 255, 0.5)",
                                    py: "8px", px: "16px",
                                }}>
                                    <Box>
                                        <Box sx={{
                                            position: { md: "absolute", xs: "relative" },
                                            width: "100%",
                                            top: { md: "50%", xs: 0 },
                                            left: { md: "50%", xs: 0 },
                                            transform: { md: "translate(-50%, -50%)", xs: "none" },
                                        }}>
                                            <Box>
                                                <Search>
                                                    <Box sx={{
                                                        width: "100%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        py: "8px",
                                                        px: { md: "16px", xs: 0 },
                                                        marginBottom: 2,
                                                    }}>
                                                        <Box sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                                            <Typography sx={{ mb: 2 }}>Subida de múltiples contactos</Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ fontSize: "14px", pb: "5px", textAlign: { xs: "center", md: "left" } }}>Buscar por número de teléfono</Typography>
                                                            <Box sx={{
                                                                border: "1px solid black",
                                                                borderRadius: "8px",
                                                                px: 1,
                                                                py: "2px"
                                                            }}>
                                                                <StyledInputBase
                                                                    type='search'
                                                                    name='Search'
                                                                    onChange={(e) => setSearch(e.target.value)}
                                                                    onKeyDown={handleKeyDown}
                                                                />
                                                                <IconButton onClick={HandleSearch} size='small'>
                                                                    <SearchIcon />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Search>
                                                {/* <FontAwesomeIcon className='search-icon' icon={faSearch} size="1x"/> */}
                                            </Box>
                                            <Box sx={{ px: { md: "50px", xs: "0" } }}>
                                                <Box sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    border: "1px dashed black",
                                                    padding: "50px",
                                                    rowGap: 1,
                                                }}>
                                                    <img src="/assets/image/cloudUpload.png" alt='file' width="80px" />
                                                    <Buttons sx={{ position: "relative", width: "80%" }} variant='contained'>
                                                        <input accept=".csv"
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
                                                            name='...'
                                                            onChange={handleChange}
                                                            onClick={event => event.target.value = null}
                                                        />
                                                        <Typography>
                                                            Selecciona archivo
                                                        </Typography>
                                                    </Buttons>
                                                    {file ?
                                                        <Typography sx={{ fontSize: "15px", color: "green" }}>{file.name}</Typography>
                                                        :
                                                        <Typography sx={{ fontSize: "15px", color: "red" }}>Elige un archivo</Typography>
                                                    }
                                                    <Typography sx={{ fontSize: "15px" }}>o arrastra y suéltalos aquí</Typography>
                                                    <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>.csv </Typography>
                                                </Box>
                                                <Box mb={2}>
                                                    <Typography sx={{ fontSize: "12px" }}>El límite es de 50.000 números</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <Buttons onClick={handleClick} sx={{ my: 1 }} variant='contained'>Subir archivo</Buttons>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sx={{ padding: "20px 20px 20px 10px", display: "flex", flexDirection: "column", rowGap: "20px" }}
                            xs={12}
                            md={7}
                        >
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #FE545C",
                                    height: { md: "25%", xs: "auto" },
                                }}
                            >
                                <Box sx={{
                                    position: "relative",
                                    boxSizing: "border-box",
                                    background: " rgba(255, 255, 255, 0.5)",
                                    py: "8px", px: "16px",
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <Typography sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>Subida de 1 contacto</Typography>
                                    <Box sx={{
                                        position: { md: "absolute", xs: "relative" },
                                        width: "100%",
                                        top: { md: "50%", xs: 0 },
                                        left: { md: "50%", xs: 0 },
                                        transform: { md: "translate(-50%, -50%)", xs: "none" },
                                    }}>
                                        <Grid container sx={{ alignItems: "flex-end", gap: "20px", justifyContent: "center", }}>
                                            <Grid item xs={12} md={3}>
                                                <InputLabel>Contacto</InputLabel>
                                                <TextField
                                                    type='number'
                                                    fullWidth
                                                    size='small'
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <InputLabel>Servicio</InputLabel>
                                                <TextField
                                                    type='text'
                                                    fullWidth
                                                    size='small'
                                                    value={service}
                                                    onChange={(e) => setService(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <Buttons
                                                        sx={{ display: "flex", borderRadius: "20px", width: "200px", mb: 0.4 }}
                                                        onClick={SavePhoneNo}
                                                    >
                                                        <AddIcon sx={{ mr: 0.5 }} />
                                                        <Typography sx={{ fontSize: "10px" }}>
                                                            Añadir número
                                                        </Typography>
                                                    </Buttons>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                position: "relative",
                                borderRadius: "12px",
                                border: "1px solid #FE545C",
                                height: { md: "50%", xs: "auto" },
                            }}>
                                <Box sx={{
                                    boxSizing: "border-box",
                                    background: " rgba(255, 255, 255, 0.5)",
                                    py: "8px", px: "16px",
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <Grid sx={{ height: "100%" }} container>
                                        <Grid sx={{ position: "relative" }} item xs={12} md={5}>
                                            <Typography sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>Lista negra de contactos</Typography>
                                            <Box sx={{
                                                position: { md: "absolute", xs: "relative" },
                                                width: "100%",
                                                top: { md: "50%", xs: 0 },
                                                left: { md: "50%", xs: 0 },
                                                transform: { md: "translate(-50%, -50%)", xs: "none" },
                                            }}>
                                                <Box>
                                                    <Search>
                                                        <Box sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            marginBottom: 2,
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "14px", pb: "5px", textAlign: { xs: "center", md: "left" } }}>Buscar por número de teléfono</Typography>
                                                                <Box sx={{
                                                                    border: "1px solid black",
                                                                    borderRadius: "8px",
                                                                    px: 1,
                                                                    py: "2px"
                                                                }}>
                                                                    <StyledInputBase
                                                                        type='search'
                                                                        name='Search'
                                                                        onChange={(e) => setBlackListSearch(e.target.value)}
                                                                        onKeyDown={handleKeyDown}
                                                                    />
                                                                    <IconButton onClick={HandleBlackListSearch} size='small'>
                                                                        <SearchIcon />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Search>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", flexDirection: "column" }} item xs={12} md={7}>
                                            <Typography sx={{ mb: 1, textAlign: { xs: "center", md: "left" } }}>Subir solo 1 número</Typography>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", flexGrow: 1 }}>
                                                <Box sx={{ display: "flex", alignItems: "center", columnGap: "20px", justifyContent: "center" }}>
                                                    <TextField
                                                        type='number'
                                                        size='small'
                                                        value={blackList}
                                                        onChange={(e) => setBlackList(e.target.value)}
                                                    />
                                                    <Buttons
                                                        sx={{ display: "flex", borderRadius: "20px" }}
                                                        onClick={SaveBlackListNo}
                                                    >
                                                        <AddIcon sx={{ mr: 1 }} />
                                                        <Typography sx={{ fontSize: "10px" }}>
                                                            Añadir número
                                                        </Typography>
                                                    </Buttons>
                                                </Box>
                                                <Box className="phone upload">
                                                    <Typography sx={{ fontSize: "12px" }}>Subir múltiples números</Typography>
                                                    <Box sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        border: "1px dashed black",
                                                        paddingX: 1,
                                                    }}>
                                                        <img src="/assets/image/cloudUpload.png" alt='file' width="40px" />
                                                        <Buttons size={"small"} sx={{ position: "relative", width: "100%" }} variant='contained'>
                                                            <input accept=".csv"
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
                                                                name='...'
                                                                onChange={handleBlackListChange}
                                                                onClick={event => event.target.value = null}
                                                            />
                                                            <Typography>
                                                                Selecciona archivo
                                                            </Typography>
                                                        </Buttons>
                                                        {blacklistFile ?
                                                            <Typography sx={{ fontSize: "15px", color: "green" }}>{blacklistFile.name}</Typography>
                                                            :
                                                            <Typography sx={{ fontSize: "15px", color: "red" }}>Elige un archivo</Typography>
                                                        }
                                                        <Typography sx={{ fontSize: "15px" }}>o arrastra y suéltalos aquí</Typography>
                                                        <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>.csv </Typography>
                                                    </Box>
                                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                        <Buttons onClick={saveBlackListFile} size={"small"} sx={{ my: 1 }} variant='contained'>Subir archivo</Buttons>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #FE545C",
                                    height: { md: "25%", xs: "auto" },
                                }}
                            >
                                <Box sx={{
                                    position: "relative",
                                    boxSizing: "border-box",
                                    background: " rgba(255, 255, 255, 0.5)",
                                    py: "8px", px: "16px",
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <Typography sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>descargar documento</Typography>
                                    <Box sx={{
                                        position: { md: "absolute", xs: "relative" },
                                        width: "100%",
                                        top: { md: "50%", xs: 0 },
                                        left: { md: "50%", xs: 0 },
                                        transform: { md: "translate(-50%, -50%)", xs: "none" },
                                    }}>
                                        <Grid container sx={{ alignItems: "flex-end", gap: "20px", justifyContent: "center", }}>
                                            <Grid item xs={12} md={5}>
                                                <TextField
                                                    select
                                                    fullWidth
                                                    size='small'
                                                    value={download}
                                                    onChange={(e) => setDownload(e.target.value)}
                                                >
                                                    <MenuItem value={"all_document"}>Descargar todos los documentos</MenuItem>
                                                    <MenuItem value={"one_document"}>Descargar solo un documento</MenuItem>
                                                    <MenuItem value={"all_record"}>Descargar todos los registros</MenuItem>
                                                    <MenuItem value={"one_records"}>Descargar solo un registro</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextField
                                                    disabled={download === "all_document" || download === "all_record"}
                                                    placeholder={download === "all_document" || download === "all_record" ? "todo el archivo" : "Entrar en Buscar"}
                                                    type='text'
                                                    fullWidth
                                                    size='small'
                                                    value={download === "all_document" || download === "all_record" ? "todo el archivo" : downloadSearch}
                                                    onChange={(e) => setDownloadSearch(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={2}>
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <Buttons
                                                        sx={{ display: "flex", fontSize: "12px", borderRadius: "20px", width: "200px", mb: 0.4 }}
                                                        onClick={handleDownload}
                                                    >
                                                        Descargar
                                                    </Buttons>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        {/* <Button onClick={() => navigate('/')} sx={{ mt: 1, textTransform: "none" }} variant='text'>Volver a la página de inicio</Button> */}
                        <Buttons onClick={() => {
                            localStorage.clear()
                            navigate("/")
                        }}>Cerrar Sesión</Buttons>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={4000}
                onClose={handleClose}
                message={massage}
                action={action}
            />
            <ShowSearch data={data} setModalOpen={setModalOpen} modalOpen={modalOpen} />
            <ShowBlackListSearch DeleteNumber={DeleteNumber} data={blackListNumber} setModalOpen={setBlackListModalOpen} modalOpen={blackListModalOpen} />
            {loading && <PageLoader />}
        </>
    );
}

export default UploadData;
