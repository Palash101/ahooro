import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { UserEmailLogin } from '../controller/AuthController';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';



function SignIn() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [alert, setAlert] = useState(false)
    const [checkedMsg, setCheckedMsg] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (loginEmail && loginPassword) {
            const result = await UserEmailLogin(loginEmail, loginPassword)
            console.log(result, 'ress')
            if (result.success === true) {
                localStorage.setItem("user", JSON.stringify(result.userData));
                navigate("/upload-data")
            }
            else {
                setCheckedMsg("El inicio de sesión y la contraseña son incorrectos")
                setAlert(true)
            }
        }
        else {
            setCheckedMsg("por favor ingrese correo electrónico y contraseña")
            setAlert(true)
        }
    }

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
                            width: { md: "25%", xs: "85%" },
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
                            <Box>
                                <Typography variant='subtitle2' mb={1}>Usuario</Typography>
                                <TextField
                                    fullWidth
                                    sx={{ mb: "20px" }}
                                    required
                                    size="small"
                                    type='email'
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                                <Typography variant='subtitle2' mb={1}>Contraseña</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    size="small"
                                    type='password'
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", pt: "20px" }}>
                                <Button onClick={handleLogin} variant='contained'>
                                    Acceder
                                </Button>
                            </Box>
                            {/* <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Button onClick={() => navigate('/')} sx={{ mt: 2, textTransform: "none" }} variant='text'>Volver a la página de inicio</Button>
                            </Box> */}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={alert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={2000}
                message={checkedMsg}
                onClose={() => setAlert(false)}
            />
        </>
    );
}

export default SignIn;
