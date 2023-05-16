import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Buttons from '../component/Button'
import Snackbar from '@mui/material/Snackbar';
import PrivacyPolicy from '../component/Modal/privacyPolicy'
import { createLead } from '../controller/AuthController'
import PageLoader from '../component/pageLoader'

export default function Home() {
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false);
    const [checkedMsg, setCheckedMsg] = useState("")

    const getLocation = (ip) => {
        return fetch(`https://ipapi.co/${ip}/json/`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data
            })
    }

    const SavedData = async () => {
        if (phone && (phone.match('[0-9]{10}'))) {
            if (checked) {
                setLoading(true)
                fetch('https://api.ipify.org?format=json', {
                    method: "GET",
                    headers: {
                    }
                })
                    .then((res) => res.json())
                    .then(async (data) => {
                        const { city, region } = await getLocation(data.ip)
                        console.log(region, "loc")
                        const ts = new Date();

                        const d = {
                            ip: data.ip,
                            phone: phone,
                            timeStamp: ts,
                            city: city,
                            region: region
                        }
                        const result = await createLead(d)
                        if (result.success) {
                            setLoading(false)
                            setCheckedMsg("subido con éxito")
                            setAlert(true)
                            setPhone("")
                            setChecked(false)
                        }
                        else {
                            setLoading(false)
                        }
                    })
            }
            else {
                setCheckedMsg("¡Por favor, debe aceptar la política de privacidad!")
                setAlert(true)
            }
        }
        else {
            setCheckedMsg("Por favor ingrese un número de teléfono válido")
            setAlert(true)
        }
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ px: 1, height: "100%" }}>
                                            <Buttons
                                                onClick={SavedData}
                                                sx={{
                                                    height: "100%", width: "100%",
                                                }}>
                                                Llámame
                                            </Buttons>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: "flex", maxWidth: "500px", mt: 2 }}>
                                    <FormControlLabel sx={{ ml: 0 }} control={
                                        <Checkbox checked={checked} onChange={handleChange} />} />
                                    <Box>
                                        <Box sx={{ fontSize: "14px", color: "#7E868E", }}>Acepto la <Box component="span" onClick={() => setOpen(true)} sx={{ color: "blue", cursor: "pointer" }}>política de privacidad</Box> y doy mis datos para que me contacte la empresa XXXXX</Box></Box>
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
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box onClick={SavedData} sx={{ px: 1, height: "100%" }}>
                                        <Buttons sx={{ height: "100%", width: "100%" }}>Llámame</Buttons>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { md: "center", xs: "left" } }}>
                                <FormControlLabel sx={{ ml: 0 }} control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                    />} />
                                <Box>
                                    <Box sx={{ fontSize: "14px", color: "#7E868E", }}>Acepto la <Box component="span" onClick={() => setOpen(true)} sx={{ color: "blue", cursor: "pointer" }}>política de privacidad</Box> y doy mis datos para que me contacte la empresa XXXXX</Box></Box>
                            </Box>
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
                            <Button onClick={() => setOpen(true)} sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Política de Privacidad</Button>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "12px" }}>© dominio.com, 2021 | o el año que sea y algunos datos legales o fiscales para engañar</Typography>
                    </Box>
                </Box>
                <PrivacyPolicy open={open} setOpen={setOpen} />
            </Box >
            <Snackbar
                open={alert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={2000}
                message={checkedMsg}
                onClose={() => setAlert(false)}
            />
            {loading &&
                <PageLoader />
            }
        </>
    )
}
