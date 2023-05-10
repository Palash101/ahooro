import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function UploadData() {
    const [file, setFile] = useState()
    console.log("file: ", file);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleChange = event => {
        setFile(event.target.files[0]);
    };
    const handleClick = () => {
        const formData = new FormData()
        formData.append('file', file);
        if (file) {
            fetch('https://us-central1-ahoraahorro-7ac91.cloudfunctions.net/function-1', {
                method: "POST",
                body: formData,
                headers: {
                }
            })
                .then((res) => res.text())
                .then(data => {
                    if (data) {
                        setOpen(true);
                    }
                    console.log(data)
                    setFile(undefined)
                })
                .catch(err => console.log(err))
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

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
                        py: "8px", px: "16px"
                    }}>
                        <Box sx={{
                            width: { md: "40%", xs: "90%" },
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                border: "1px dashed black",
                                padding: "50px",
                                rowGap: 1
                            }}>
                                <img src="/assets/image/cloudUpload.png" alt='file' width="80px" />
                                <Button sx={{ position: "relative", width: "60%" }} variant='contained'>
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
                                    />
                                    Choose file to upload
                                </Button>
                                {file ?
                                    <Typography sx={{ fontSize: "15px", color: "green" }}>{file.name}</Typography>
                                    :
                                    <Typography sx={{ fontSize: "15px", color: "red" }}>Choose a file</Typography>
                                }
                                <Typography sx={{ fontSize: "15px" }}>or drag and drop them here</Typography>
                                <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>.csv or .xlsx</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                pt: "20px",
                                alignItems: "center"
                            }}>
                                <FormControlLabel
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
                                />
                                <Button onClick={handleClick} sx={{ mt: 1 }} variant='contained'>Upload File</Button>
                                <Button onClick={() => navigate('/')} sx={{ mt: 1, textTransform: "none" }} variant='text'>Back to Home page</Button>
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
                message="File Uploaded successfully"
                action={action}
            />
        </>
    );
}

export default UploadData;
