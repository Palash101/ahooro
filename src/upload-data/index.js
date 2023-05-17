import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
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
import { SearchDoc } from '../controller/AuthController';
import ShowSearch from '../component/Modal/showSearch';
import PageLoader from '../component/pageLoader';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddNumber from '../component/Modal/addNumber';


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
    const [search, setSearch] = useState("")
    console.log("search: ", search);
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)
    const [massage, setMassage] = useState("")
    console.log("file: ", file);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleChange = event => {
        setFile(event.target.files[0]);
    };

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
    const handleClick = () => {
        const formData = new FormData()
        formData.append('file', file);
        if (file) {
            setLoading(true)
            fetch('https://us-central1-ahoraahorro-7ac91.cloudfunctions.net/function-1', {
                method: "POST",
                body: formData,
                headers: {
                }
            })
                .then((res) => res.text())
                .then(data => {
                    if (data) {
                        setMassage("Documento cargado exitosamente")
                        setOpen(true);
                        setLoading(false)
                    }
                    console.log(data)
                    setFile(undefined)
                })
                .catch(err => console.log(err))
        }
        else {
            setMassage("Seleccione un archivo")
            setOpen(true);
        }

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
            <Box sx={{ height: "97vh", p: 1 }}>
                <Box sx={{
                    borderRadius: "12px",
                    border: "1px solid #FE545C",
                    width: "100%",
                    height: "100%",
                }}>
                    <Box sx={{
                        boxSizing: "border-box",
                        background: " rgba(255, 255, 255, 0.5)",
                        py: "8px", px: "16px",
                    }}>
                        <Fab
                            onClick={() => setAddModalOpen(true)}
                            sx={{
                                position: "absolute",
                                top: { md: 16, xs: "unset" },
                                bottom: { md: "unset", xs: 35 },
                                right: 16,
                                textTransform: "none",
                                color:"white",
                                background: "linear-gradient(265.77deg, #005280 -6.06%, #0D816C 108.54%);"
                            }} variant="extended">
                            <AddIcon sx={{ mr: 1 }} />
                            Add Number
                        </Fab>
                        <Box sx={{
                            width: { md: "40%", xs: "90%" },
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
                            <Box component="Box">
                                <Search>
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: 2,
                                    }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", pb: "5px" }}>Buscar por número de teléfono</Typography>
                                            <Box sx={{
                                                border: "1px solid black",
                                                borderRadius: "8px",
                                                px: 1,
                                                py: "2px"
                                            }}>
                                                <StyledInputBase
                                                    type='search'
                                                    name='Search'
                                                    placeholder='Enter phone number'
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
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                border: "1px dashed black",
                                padding: "50px",
                                rowGap: 1,
                            }}>
                                <img src="/assets/image/cloudUpload.png" alt='file' width="80px" />
                                <Buttons sx={{ position: "relative", width: "60%" }} variant='contained'>
                                    <input accept=".csv,.xls,.xlsx"
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
                                    Selecciona archivo
                                </Buttons>
                                {file ?
                                    <Typography sx={{ fontSize: "15px", color: "green" }}>{file.name}</Typography>
                                    :
                                    <Typography sx={{ fontSize: "15px", color: "red" }}>Elige un archivo</Typography>
                                }
                                <Typography sx={{ fontSize: "15px" }}>o arrastra y suéltalos aquí</Typography>
                                <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>.csv or .xlsx</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                pt: "20px",
                                alignItems: "center"
                            }}>
                                {/* <FormControlLabel
                                    sx={{ width: "30%", justifyContent: "space-between" }}
                                    value="numeros"
                                    control={<Switch color="primary" />}
                                    label="Numeros"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    sx={{ width: "30%", justifyContent: "space-between" }}
                                    value="Todo"
                                    control={<Switch color="primary" />}
                                    label="Todo"
                                    labelPlacement="start"
                                /> */}
                                <Buttons onClick={handleClick} sx={{ my: 1 }} variant='contained'>Subir archivo</Buttons>
                                {/* <Button onClick={() => navigate('/')} sx={{ mt: 1, textTransform: "none" }} variant='text'>Volver a la página de inicio</Button> */}
                                <Buttons onClick={() => {
                                    localStorage.clear()
                                    navigate("/")
                                }}>Cerrar Sesión</Buttons>
                            </Box>
                        </Box>
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
            <AddNumber setAddModalOpen={setAddModalOpen} addModalOpen={addModalOpen} />
            {loading && <PageLoader />}
        </>
    );
}

export default UploadData;
