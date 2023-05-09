import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function SignIn() {
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
                            width: { md: "25%", xs: "100%" },
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
                                // onChange={(e) => setLoginEmail(e.target.value)}
                                />
                                <Typography variant='subtitle2' mb={1}>Contraseña</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    size="small"
                                    type='password'
                                // onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", pt: "20px" }}>
                                <Button variant='contained'>
                                    Acceder
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default SignIn;
