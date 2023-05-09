import React from 'react'
import NavBar from '../component/NavBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Home() {
    return (
        <>
            <NavBar />
            <Box>
                {/* Section1 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)"
                }}>
                    <Box sx={{
                        p: { md: "150px", xs: 2 },
                        backgroundImage: { md: "url('assets/image/Banner.png')", xs: 'none' },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "70%",
                        backgroundPositionX: "right",
                        backgroundPositionY: "150px",
                        height: "900px"
                    }}>
                        <Grid container>
                            <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
                                <Typography sx={{ fontSize: "54px", fontWeight: 900, color: "#091C06", mb: 3 }} variant='h3'>¿Harto de pagar tanto en la factura de teléfono?</Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#091C06", mb: 3 }} variant='h6'>Te hacemos la mejor oferta de telefonía de todo el mercado. Te llamamos ahora mismo y en 15 minutos estarás pagando mucho menos de lo que pagas ahora.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Grid container>
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
                                            <Button variant="contained" sx={{ height: "100%" }} fullWidth>Llámame</Button>
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
                        p: { md: "100px", xs: 2 },
                    }}>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ px: 1, display: "flex", flexDirection: "column" }}>
                                    <Box>
                                        <img src="/assets/image/img1.png" alt="" width="100%" />
                                    </Box>
                                    <Box></Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}></Grid>
                            <Grid item xs={12} md={4}></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
