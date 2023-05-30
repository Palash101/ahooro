import React from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function PrivacyPolicy({ open, setOpen, scroll }) {

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <>
            <Dialog
                sx={{
                    "& .MuiPaper-root": {
                        m: 0,
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }
                }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent sx={{ p: 0, maxWidth: "100%" }} >
                    <Box sx={{ height: "100%", p: 1, background: "#f5f5f5" }}>
                        <Box sx={{
                            borderRadius: "12px",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            boxSizing: "border-box",
                            background: "white",
                            py: 2,
                            px: { md: "100px", xs: 2 }
                        }}>
                            <Box component="ul" sx={{ overflowY: "auto", height: "90%", listStyle: "decimal" }}>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Plantilla de Política de Privacidad</Box>
                                <Typography>La siguiente información sobre nuestra Política de Privacidad refleja el compromiso de ALTEL COMUNICACIONES XXI SL, (en adelante HARTODEPAGAR), como responsable del tratamiento, por mantener y garantizar relaciones comerciales seguras mediante la protección de los datos personales, garantizando el derecho a la privacidad de cada uno de los usuarios de nuestros servicios. En este documento explicamos cómo utilizamos los datos personales durante el uso de nuestros servicios.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Definición de dato personal</Box>
                                <Typography>Como "Dato Personal" debemos entender cualquier información concerniente a una persona física identificada o identificable. Entre otros, se incluyen el nombre, apellidos, la dirección postal y electrónica, así como el número de teléfono.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Tratamientos y finalidades de los datos recogidos</Box>
                                <Typography>Cualquier dato personal que nos facilite al visitar nuestro portal web será tratado de conformidad con las normas de protección de datos y sólo serán recogidos, tratados y utilizados para fines lícitos, legítimos e informados. Por ello, detallamos todas las finalidades con las que ALTEL COMUNICACIONES XXI SL utiliza datos personales:</Typography>
                                <Box component="ul">
                                    <Box sx={{ listStyle: "none", fontWeight: 700, py: 1 }} component="li">- Por el envío de formularios de contacto o correos electrónicos:</Box>
                                </Box>
                                <Box sx={{ listStyle: "disc", pb: 1 }} component="ul">
                                    <Box component="li">Finalidad: Poder responder a las consultas planteadas y ponerse en contacto con el usuario para remitirle información comercial sobre tarifas de servicios de telefonía y conexión a internet.</Box>
                                    <Box component="li">Legitimación: La base legítima con la que se tratarán los datos reside en la ejecución de las medidas precontractuales solicitadas y/o el consentimiento prestado.</Box>
                                    <Box component="li">Plazos de conservación: Los datos serán conservados durante el tiempo necesario para responder a las cuestiones planteadas, durante un plazo máximo de un año para aquellos supuestos que no deriven en una acción comercial.</Box>
                                </Box>
                                <Typography pb={1}>Desde HARTODEPAGAR informaremos a todos los usuarios el carácter no obligatorio de la recogida de determinados datos de carácter personal, salvo en los campos que se indique lo contrario. No obstante, la no cumplimentación de dichos datos podrá impedir a HARTODEPAGAR prestar todos aquellos Servicios vinculados a tales datos, liberándonos de toda responsabilidad por la no prestación o prestación incompleta de estos Servicios.</Typography>
                                <Typography pb={1}>Corresponde al usuario la obligación de facilitar los datos de manera veraz y mantenerlos actualizados, por lo que HARTODEPAGAR se reserva el derecho de excluir de los servicios y proceder a la cancelación del servicio a todo usuario que haya facilitado datos falsos, sin perjuicio de las demás acciones que procedan en Derecho.Sus datos personales NO serán comunicados a ninguna otra empresa. En el caso de que fuera necesario comunicar su información a otra entidad, se solicitaría su consentimiento expreso antes de realizar la comunicación.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Seguridad de sus datos personales</Box>
                                <Typography>HARTODEPAGAR tiene una preocupación especial por garantizar la seguridad de sus datos personales. Sus datos son almacenados en nuestros sistemas de información, donde hemos adoptado e implantado medidas de seguridad, técnicas y organizativas, para prevenir cualquier pérdida o uso no autorizado por terceros, por ejemplo nuestros portales web utilizan protocolos de cifrado de datos Https.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Información sobre la Utilización de cookies</Box>
                                <Typography>Por el mero hecho de visitar el presente portal web o utilizar los servicios de HARTODEPAGAR no queda registrado de forma automática ningún dato de carácter personal que identifique a un Usuario. También le informamos que durante la navegación por el Sitio Web no se utilizan cookies o tecnologías similares.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Derechos de los usuarios. </Box>
                                <Typography>Todos los usuarios pueden ejercitar cualquier de los derechos otorgados por la normativa de protección de datos, como el derecho de acceso, rectificación, limitación del tratamiento, supresión, portabilidad de datos y oposición que le asisten mediante escrito dirigido a la dirección electrónica a nuestro delegado de protección de datos info@hartodepagar.com. Y en el caso de que lo estime oportuno podrá presentar reclamación ante la Agencia Española de Protección.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>¿No desea recibir información de nosotros o desea revocar su consentimiento?</Box>
                                <Typography>Cualquier usuario puede oponerse al uso de su información para fines publicitarios, investigaciones de mercado o desarrollo de encuestas de satisfacción, así como revocar su consentimiento en cualquier momento (sin efecto retroactivo). Para ello, deberá enviar un correo electrónico a la dirección info@hartodepagar.com.  Cuando reciba publicidad por correo electrónico, también podrá oponer desde dicho correo electrónico, pinchando en el enlace incluido en el mismo y siguiendo las instrucciones que le sean facilitadas. </Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>Cambios a la Política de Privacidad.</Box>
                                <Typography>Nuestra Política de Privacidad podrá sufrir actualizaciones, debidas a cambios y necesidades legales, así como debidas a mejoras y cambios incluidos en la forma de ofrecer y prestar nuestros servicios. Por ello, le recomendamos que visite y acceda a nuestra Política de Privacidad periódicamente, para poder tener acceso y conocer los últimos cambios que hayan podido ser incorporados. En caso de que dichos cambios guarden relación con el consentimiento prestado por el usuario, en tal caso le será enviada una notificación independiente y por separado para recavarlo nuevamente.</Typography>
                                <Typography>Si durante la lectura le ha surgido alguna duda o cuestión sobre nuestra Política de Privacidad o quiere ejercitar algún derecho o acción relativa a sus datos personales, por favor póngase en contacto con nosotros en la siguiente dirección de correo electrónico info@hartodepagar.com.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Buttons onClick={handleClose} >CERRAR</Buttons>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
}
