import React, { useState } from 'react'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
import Buttons from '../component/Button'
import { SendMassage } from '../controller/AuthController'
import PrivacyPolicyModal from '../component/Modal/privacyPolicy'
import LegalWarning from '../component/Modal/legalWarning'
import Snackbar from '@mui/material/Snackbar'
import PageLoader from '../component/pageLoader'
import { useNavigate } from 'react-router-dom'


export default function PrivacyPolicy() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checkedMsg, setCheckedMsg] = useState("")

    const navigate = useNavigate()

    var urlParams = new URLSearchParams(window.location.search);

    var phone = urlParams.get('phone');
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
    const handleAccept = async () => {
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
                    timeStamp: ts,
                    phone: phone,
                    city: city,
                    region: region
                }
                const policy = await SendMassage(d)
                console.log("policy: ", policy.success);
                if (policy.success) {
                    setLoading(false)
                    setCheckedMsg("Policy Accepted")
                    setAlert(true)
                    // navigate("/", { state: { pass: true } })
                    navigate("/")
                } else {
                    setLoading(false)
                    setCheckedMsg("Something went wrong")
                    setAlert(true)
                }
            })

    }
    return (
        <>
            <Box sx={{ height: "97vh", p: 1 }}>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "12px",
                    width: { md: "40%", xs: "100%" },
                    overflow: "hidden",
                    boxSizing: "border-box",
                    background: "white",
                    p: 2
                }}>
                    <Box>
                        <Box sx={{ fontSize: "20px", color: "#7E868E", fontWeight: 500 }}>Acepto los términos del <Box component="span" onClick={() => setOpen2(true)} sx={{ cursor: "pointer", color: "blue", fontWeight: 600 }}>Aviso legal</Box> y de la <Box onClick={() => setOpen(true)} component="span" sx={{ cursor: "pointer", color: "blue", fontWeight: 600 }}>Política de Privacidad</Box> para que ALTEL COMUNICACIONES XXI, SL trate mis datos con la finalidad de gestionar mi solicitud de información y recibir comunicaciones comerciales. También quedo informado que podré ejercitar los derechos que otorga la normativa de protección de datos siguiendo lo establecido en la política de privacidad.</Box>
                        {/* <Typography variant='body2'>Plantilla de Política de Privacidad</Typography>
                        <Typography variant='body2'>TITULAR te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web DIRECCIÓN-WEB.</Typography>
                        <Typography variant='body2'>En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).</Typography>
                        <Typography variant='body2'>El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.</Typography>
                        <Box component="ul">
                            <Box component="li">
                                Identidad del responsable</Box>
                            <Box component="li">
                                Titular: TITULAR
                            </Box>
                            <Box component="li">
                                DATOS-DEL-COLEGIO-PROFESIONAL
                            </Box>
                            <Box component="li">
                                NIF/CIF: NIF
                            </Box>
                            <Box component="li">
                                Domicilio: DIRECCIÓN-POSTAL
                            </Box>
                            <Box component="li">
                                Correo electrónico: CORREO-ELECTRÓNICO
                            </Box>
                            <Box component="li">
                                Sitio Web: DIRECCIÓN-WEB
                            </Box>
                        </Box>
                        <Typography variant='body2'>Principios aplicados en el tratamiento de datos</Typography>
                        <Typography variant='body2'>En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:</Typography>
                        <Typography variant='body2'>Plantilla de Política de Privacidad</Typography>
                        <Box component="ul">
                            <Box component="li">Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.</Box>
                            <Box component="li">Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.</Box>
                            <Box component="li">Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento.El Titular te informará del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.</Box>
                            <Box component="li">Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.</Box>
                        </Box>
                        <Typography variant='body2'>Obtención de datos personales</Typography>
                        <Typography variant='body2'>Para navegar por SITIO-WEB no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los siguientes:</Typography>
                        <Typography variant='body2'>ELIMINA LOS QUE NO USES:</Typography>
                        <Box component="ul">
                            <Box component="li">Al contactar a través de los formularios de contacto o enviar un correo electrónico.</Box>
                            <Box component="li">Al realizar un comentario en un artículo o página.</Box>
                            <Box component="li">Al inscribirte en un formulario de suscripción o un boletín que el Titular gestion</Box>
                        </Box> */}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                        <Buttons onClick={handleAccept}>Aceptar</Buttons>
                    </Box>
                </Box>
            </Box>
            <PrivacyPolicyModal open={open} setOpen={setOpen} />
            <LegalWarning open={open2} setOpen={setOpen2} />
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
