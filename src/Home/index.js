import React from 'react'
import NavBar from '../component/NavBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Buttons from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/firebaseConfig'

export default function Home() {
    const navigate = useNavigate()
    console.log("db: ", db);

    return (
        <>
            <NavBar />
            <Box>
                {/* Section1 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)"
                }}>
                    <Box sx={{
                        p: { md: "150px", xs: 1 },
                        backgroundImage: { md: "url('assets/image/Banner.png')", xs: 'none' },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "70%",
                        backgroundPositionX: "right",
                        backgroundPositionY: "150px",
                        height: { md: "900px", xs: "auto" }
                    }}>
                        <Grid container>
                            <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
                                <Typography sx={{ fontSize: "54px", fontWeight: 900, color: "#091C06", mb: 3 }} variant='h3'>¿Harto de pagar tanto en la factura de teléfono?</Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#091C06", mb: 3 }} variant='h6'>Te hacemos la mejor oferta de telefonía de todo el mercado. Te llamamos ahora mismo y en 15 minutos estarás pagando mucho menos de lo que pagas ahora.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Grid rowGap={1} container>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ px: 1, height: "100%" }}>
                                            <TextField
                                                fullWidth
                                                sx={{ backgroundColor: "white" }}
                                                required
                                                size="small"
                                                type='phone'
                                            // onChange={(e) => setLoginEmail(e.target.value)}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ px: 1, height: "100%" }}>
                                            <Buttons sx={{
                                                height: "100%", width: "100%",
                                            }}>Llámame</Buttons>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box component="ul">
                                    <Box sx={{ fontSize: "12px", color: "#4A4A4A" }} component="li">
                                        Acepto la política de privacidad y doy mis datos <br />para que me contacte la empresa XXXXX
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* Section2 */}
                <Box sx={{
                    background: "linear-gradient(270deg, #82C5B6, #FBFAE1)"
                }}>
                    <Box sx={{
                        p: { md: "150px", xs: 1 },
                    }}>
                        <Grid rowGap={2} container>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    mx: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    height: "100%"
                                }}>
                                    <Box height="250px">
                                        <img src="/assets/image/img1.png" alt="" width="100%" height="100%" />
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        px: "25px",
                                        py: "50px",
                                        rowGap: 2,
                                        background: "white",
                                        height: "100%"
                                    }}>
                                        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>Hasta 1.000 MB simétricos</Typography>
                                        <Typography sx={{ fontSize: "16px" }}>Ofrecemos conexiones de alta velocidad para particulares y empresas.</Typography>
                                        <Buttons sx={{ borderRadius: "50px" }}>La quiero</Buttons>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    mx: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    height: "100%"
                                }}>
                                    <Box height="250px">
                                        <img src="/assets/image/img2.png" alt="" width="100%" height="100%" />
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        px: "25px",
                                        py: "50px",
                                        rowGap: 2,
                                        background: "white",
                                        height: "100%"
                                    }}>
                                        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>Hasta 80 GB mensuales por línea</Typography>
                                        <Typography sx={{ fontSize: "16px" }}>También puedes compartir datos entre varias líneas sin coste adicional.</Typography>
                                        <Buttons sx={{ borderRadius: "50px" }}>La quiero</Buttons>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    mx: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    height: "100%"
                                }}>
                                    <Box height="250px">
                                        <img src="/assets/image/img3.png" alt="" height="100%" width="100%" />
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        px: "25px",
                                        py: "50px",
                                        rowGap: 2,
                                        background: "white",
                                        height: "100%"
                                    }}>
                                        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>Smartphones a precio imbatible</Typography>
                                        <Typography sx={{ fontSize: "16px" }}>Quieres un smartphone o tablet, pues lo tenemos, para que lo pagues cómodamente.</Typography>
                                        <Buttons sx={{ borderRadius: "50px" }}>La quiero</Buttons>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* Section3 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)"
                }}>
                    <Box sx={{
                        px: { md: "150px", xs: 1 },
                        py: { md: "50px", xs: 2 },
                    }}>
                        <Box sx={{ textAlign: "center", px: { md: "150px", xs: 0, mb: 2 } }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 700, mb: 2 }}>¿Quieres dejar de pagar tanto y tener un Smartphone último modelo por muy poco?</Typography>
                            <Typography sx={{ fontSize: "21px", mb: 2 }}>Danos tú número de teléfono y te llamaremos enseguida para darte una oferta espectacular. Cuantas más líneas tengas, más ahorrarás.</Typography>
                            <Grid rowGap={1} mb={2} container>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ px: 1, height: "100%" }}>
                                        <TextField
                                            fullWidth
                                            sx={{ backgroundColor: "white" }}
                                            required
                                            size="small"
                                            type='phone'
                                        // onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ px: 1, height: "100%" }}>
                                        <Buttons sx={{ height: "100%", width: "100%" }}>Llámame</Buttons>
                                    </Box>
                                </Grid>
                            </Grid>
                            <FormControlLabel sx={{ fontSize: "12px", color: "#7E868E" }} control={<Checkbox defaultChecked />} label="Acepto la política de privacidad y doy mis datos para que me contacte la empresa XXXXX" />
                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundImage: "url('assets/image/facturon.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom center",
                        height: { md: "750px", xs: "300px", },
                        backgroundSize: { md: "auto", xs: "contain" }
                    }}></Box>
                </Box>
                {/* Section4 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)",
                    p: 2
                }}>
                    <Box sx={{ width: { md: "25%", xs: "100%" }, mx: "auto", mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Quienes somos</Button>
                            <Button sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Aviso Legal</Button>
                            <Button onClick={() => navigate('/privacy-policy')} sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Política de Privacidad</Button>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "12px" }}>© dominio.com, 2021 | o el año que sea y algunos datos legales o fiscales para engañar</Typography>
                    </Box>
                </Box>
            </Box >
        </>
    )
}
