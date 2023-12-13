import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../component/NavBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Buttons from '../component/Button'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import PrivacyPolicyModal from '../component/Modal/privacyPolicy'
import { createLead } from '../controller/AuthController'
import PageLoader from '../component/pageLoader'
import CookieBot from 'react-cookiebot'
import LegalWarning from '../component/Modal/legalWarning'
import CookiesPolicy from '../component/Modal/cookiesPolicy'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false);
    const [checkedMsg, setCheckedMsg] = useState("")

    const navigate = useNavigate()
    // const { state } = useLocation();
    // console.log("state: ", state);

    // useEffect(() => {
    //     if (state) {
    //         setCheckedMsg("Policy Accepted")
    //         setAlert(true)
    //     } else {
    //         console.log("no", state);
    //     }
    // }, [])

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
        if (phone) {
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
                        const ts = new Date();

                        const d = {
                            ip: data.ip,
                            phone: phone,
                            timeStamp: ts,
                            city: city,
                            region: region
                        }
                        console.log("d: ", d);
                        setLoading(false)
                        const result = await createLead(d)
                        console.log(result, "lead")
                        if (result.success) {
                            setLoading(false)
                            setCheckedMsg("Pronto, nos ponemos en contácto con usted")
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
            <Box sx={{ height: "100vh", overflow: "hidden" }}>
                {/* Section1 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)",
                    height: "100%",
                }}>
                    <Box sx={{
                        p: { md: "80px", xs: 1 },
                        backgroundImage: { md: "url('assets/image/facturon.png')", xs: 'none' },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "70%",
                        backgroundPositionX: "left",
                        backgroundPositionY: "bottom",
                        height: "100%",

                    }}>
                        <Grid container>
                            <Grid item xs={12} md={6}></Grid>
                            <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" }, pt: { md: "4vh", xs: "70px" } }}>
                                <Typography sx={{ fontSize: { md: "3vw", xs: "20px" }, fontWeight: 900, color: "#091C06", mb: 3 }} variant='h3'>¿Harto de pagar tanto en la factura de teléfono?</Typography>
                                <Typography sx={{ fontSize: { md: "1vw", xs: "15px" }, fontWeight: 600, color: "#091C06", mb: 3, pr: { md: "12vw", xs: 0 } }} variant='h6'>Te hacemos la mejor oferta de telefonía de todo el mercado. Te llamamos ahora mismo y en 15 minutos estarás pagando mucho menos de lo que pagas ahora.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6}></Grid>
                            <Grid item xs={12} md={6}>
                                <Grid rowGap={1} sx={{ pr: { md: "15vw", xs: 0 } }} container>
                                    <Grid item xs={12} md={7}>
                                        <Box sx={{ px: 1, height: "100%" }}>
                                            <TextField
                                                fullWidth
                                                sx={{ backgroundColor: "white" }}
                                                required
                                                placeholder='Mi teléfono'
                                                type='phone'
                                                size='small'
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PhoneIcon sx={{ fontSize: "18px" }} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
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
                                <Box sx={{ display: "flex", alignItems: "flex-start", maxWidth: "500px", mt: 2 }}>
                                    <FormControlLabel sx={{ ml: 0, " & .MuiCheckbox-root": { p: 0 } }} control={
                                        <Checkbox checked={checked} onChange={handleChange} />} />
                                    <Box>
                                        <Box sx={{ fontSize: "12px", color: "#7E868E", fontWeight: 500 }}>Acepto los términos del <Box component="span" onClick={() => setOpen2(true)} sx={{ cursor: "pointer", color: "blue", fontWeight: 600 }}>Aviso legal</Box> y de la <Box onClick={() => setOpen(true)} component="span" sx={{ cursor: "pointer", color: "blue", fontWeight: 600 }}>Política de Privacidad</Box>para que ALTEL COMUNICACIONES XXI, SL trate mis datos con la finalidad de gestionar mi solicitud de información y, a través de llamadas telefónicas, me ofrezca información comercial sobre tarifas de servicios de telefonía y conexión a internet. También quedo informado que podré ejercitar los derechos que otorga la normativa de protección de datos siguiendo lo establecido en la política de privacidad.</Box></Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* Section2 */}
                {/* <Box sx={{
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
                </Box> */}
                {/* Section3 */}
                {/* <Box sx={{
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
                </Box> */}
                {/* Section4 */}
                <Box sx={{
                    background: "linear-gradient(45deg, #82C5B6, #FBFAE1)",
                    p: 1,
                    position: "fixed",
                    width: "100%",
                    bottom: 0,
                }}>
                    <Box sx={{ width: { md: "35%", xs: "100%" }, mx: "auto", mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button onClick={() => setOpen2(true)} sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Aviso Legal</Button>
                            <Button onClick={() => setOpen(true)} sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Política de Privacidad</Button>
                            <Button onClick={() => navigate("/politicadecookies")} sx={{ color: "black", textTransform: "none", fontSize: "12px" }} variant='text'>Política de Cookies</Button>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "12px" }}>ALTEL COMUNICACIONES XXI SL © {new Date().getFullYear()}</Typography>
                    </Box>
                </Box>
                <PrivacyPolicyModal open={open} setOpen={setOpen} />
                <LegalWarning open={open2} setOpen={setOpen2} />
                <CookiesPolicy open={open3} setOpen={setOpen3} />
                <CookieBot domainGroupId='6be1ca9c-e0da-4b9c-8ace-c65228feaf1b' />
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
