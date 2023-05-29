import React from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';


export default function CookiesPolicy({ open, setOpen, scroll }) {

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
                            <Box sx={{ listStyle: "none" }} component="ul">
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>POLÍTICA DE COOKIES</Box>
                                <Typography>La siguiente información sobre nuestra Política de Cookies refleja el compromiso de ALTEL COMUNICACIONES XXI, SL (en adelante HARTODEPAGAR), como responsable del tratamiento, para utilizar cookies y tecnologías similares garantizando el derecho a la privacidad de cada uno de los usuarios de nuestros servicios. En este documento explicamos cómo utilizamos cookies y tecnologías similares durante el uso de nuestros servicios:</Typography>
                            </Box>
                            <Box component="ul" sx={{ overflowY: "auto", height: "90%", listStyle: "decimal" }}>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>DESCRIPCIÓN DE COOKIES</Box>
                                <Typography pb={1}>Una “Cookie” es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario, facilitando la navegación por una página web y son esenciales para el funcionamiento de Internet.</Typography>
                                <Typography>Las cookies se utilizan, por ejemplo, para recordar los gustos de los usuarios en la web: idioma, navegador utilizado; analizar los hábitos y comportamientos del usuario para mejorar los servicios ofrecidos, o para adecuar los contenidos de una página web a las preferencias del visitante.</Typography>

                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>QUÉ TIPO DE COOKIES UTILIZAMOS</Box>
                                <Typography>SEGÚN LA ENTIDAD QUE LA GESTIONA</Typography>
                                <Box pb={1} sx={{ listStyle: "disc" }} component="ul">
                                    <Box pb={1} component="li">Cookies propias: Son aquellas que se envían a tu equipo desde nuestros propios equipos o dominios y desde el que prestamos el servicio que nos solicitas.</Box>
                                    <Box component="li">Cookies de terceros: Son aquellas que se envían a tu equipo desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad colaboradora. Como, por ejemplo, las usadas por redes sociales, o por contenido externo.</Box>
                                </Box>
                                <Typography pb={1}>SEGÚN EL PLAZO DE TIEMPO QUE PERMANECEN ACTIVAS</Typography>
                                <Box pb={1} sx={{ listStyle: "disc" }} component="ul">
                                    <Box pb={1} component="li">Cookies de sesión: Son cookies temporales que permanecen en el archivo de cookies de tu navegador hasta que abandonas la página web, por lo que ninguna queda registrada en el disco duro de tu ordenador. La información obtenida por medio de estas cookies, sirven para analizar pautas de tráfico en la web. A la larga, esto nos permite proporcionar una mejor experiencia para mejorar el contenido y facilitar su uso.</Box>
                                    <Box component="li">Cookies persistentes: Son almacenadas en el disco duro y nuestra web las lee cada vez que realizas una nueva visita. Una web permanente posee una fecha de expiración determinada. La cookie dejará de funcionar después de esa fecha. Estas cookies las utilizamos, generalmente, para facilitar los servicios de compra y registro.</Box>
                                </Box>
                                <Typography pb={1}>SEGÚN SU FINALIDAD</Typography>
                                <Box pb={1} sx={{ listStyle: "disc" }} component="ul">
                                    <Box pb={1} component="li">Estrictamente necesarias: Estas cookies son necesarias para facilitar la correcta navegación por nuestro sitio web y aseguran que el contenido se carga eficazmente, permitiendo la correcta utilización de las diferentes opciones o servicios que en ella existen como por ejemplo realizar el proceso de compra o controlar el fraude vinculado a la seguridad del servicio. Se incluyen cookies analíticas y agregadas para hacer recuento del tráfico del sitio y las páginas visitadas.</Box>
                                    <Box pb={1} component="li">Analíticas y optimización: Estas cookies son propias o de terceros que nos permiten optimizar tu experiencia en el sitio web evaluando su rendimiento y mejorar añadiendo nuevas funcionalidades.</Box>
                                    <Box pb={1} component="li">Personalización: Permiten guardar la información de preferencia del usuario para mejorar la calidad de nuestros servicios y para ofrecer una mejor experiencia a través de productos recomendados. Algunas pueden ser multidispositivo.</Box>
                                    <Box pb={1} component="li">Publicidad comportamental: Estas cookies son utilizadas para almacenar información del comportamiento de los usuarios obtenida a través de la observación continuada. Gracias a ellas, podemos conocer los hábitos de navegación en el sitio web y mostrar publicidad relacionada con tu perfil de navegación</Box>
                                </Box>
                                <Typography pb={1}>A continuación, describimos que tipo de cookies utilizamos y las finalidades de las mismas, pudiendo ampliar más información sobre cada una de las cookies, así como su duración en la siguiente lista:</Typography>
                                <Box pb={1} sx={{ listStyle: "disc" }} component="ul">
                                    <Box pb={1} component="li">Cookies propias: son cookies estrictamente necesarias. Permiten la interacción del usuario por el sitio web utilizando todas sus funciones.</Box>
                                    <Box pb={1} component="li">Cookies Analíticas: son cookies utilizadas para el análisis, investigación o estadísticas con el fin de saber secciones más visitadas, puntos de conexión, etc y así poder mejorar el portal web.</Box>
                                    <Box pb={1} component="li">Cookies de complementos: son cookies utilizadas por complementos externos instalados en la web para su buen funcionamiento, como por ejemplo mostrar el cartel informativo sobre el uso de cookies.</Box>
                                    <Box pb={1} component="li">Cookies de redes sociales: son cookies utilizadas para identificarte como usuario en la red social y poder interactuar a través de tu perfil a través de las APIs instaladas.</Box>
                                </Box>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>BASE LEGÍTIMA PARA EL USO DE COOKIES</Box>
                                <Typography pb={1}>La legitimación para el uso de las cookies estrictamente funcionales, viene dada porque el tratamiento es necesario para el cumplimiento de una obligación legal conforme a la Ley 34/2002 Ley de Servicios de la Información y de Comercio Electrónico.</Typography>
                                <Typography>La legitimación para el uso de las cookies con fines analíticos de optimización de personalización de publicidad comportamental y valoración está basada en el consentimiento que se solicita, conforme al Artículo 6.1.a) del Reglamento (UE) 2017/679.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>PLAZO DE CONSERVACIÓN DE LA INFORMACIÓN</Box>
                                <Typography pb={1}>Mantendremos la información mientras sea necesario para la prestación del servicio solicitado, hasta que nos manifiestes tu oposición o hasta que revoques tu consentimiento. En estos casos, la información se mantendrá debidamente bloqueada sin que la podamos utilizar mientras sea necesaria para el ejercicio o defensa de reclamaciones legales o contractuales. Una vez transcurrido este plazo de tiempo, tus datos serán eliminados definitivamente.</Typography>
                                <Typography>En los casos en que obtenemos datos automáticamente a través de cookies, ten en cuenta que algunas pueden estar instaladas durante años. No obstante, puedes limitar su uso en el tiempo eliminándolas de los navegadores o dispositivos.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>FORMAS DE BLOQUEAR Y LIMITAR EL USO DE COOKIES:</Box>
                                <Typography pb={1}>Es importante destacar que estas tecnologías no son intrusivas, ya que toda la información obtenida a través de las cookies es totalmente anónima, y en ningún caso puede ser asociada a un usuario concreto e identificado. Esta información nos permite adaptar y mejorar sus servicios a los intereses de los usuarios. No obstante, el usuario tiene la opción de impedir la generación de cookies, mediante la selección de la correspondiente opción en su programa navegador. Informa que en el caso de que deshabilite el uso de cookies la navegación puede ser más lenta de lo habitual.</Typography>
                                <Typography pb={1}>Concretamente, todos los navegadores permiten hacer cambios que permiten desactivar la configuración de las cookies. Estos ajustes se encuentran ubicados en las “opciones” o “preferencias” del menú de su navegador. A continuación, le mostramos mediante enlaces la forma de deshabilitar las cookies siguiendo las instrucciones de los navegadores más utilizados:</Typography>
                                <Box pb={1} sx={{ listStyle: "disc" }} component="ul">
                                    <Box pb={1} component="li">Internet Explorer: <Link href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies" sx={{ cursor: "pointer" }}>http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies</Link></Box>
                                    <Box pb={1} component="li">Mozilla Firefox: <Link href=" https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-us&redirectslug=cookies" sx={{ cursor: "pointer" }}> https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-us&redirectslug=cookies</Link></Box>
                                    <Box pb={1} component="li">Google Chrome: <Link href="https://support.google.com/chrome/answer/95647?hl=es" sx={{ cursor: "pointer" }}>https://support.google.com/chrome/answer/95647?hl=es</Link></Box>
                                    <Box pb={1} component="li">Safari: <Link href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" sx={{ cursor: "pointer" }}>https://support.apple.com/es-es/guide/safari/sfri11471/mac</Link></Box>
                                </Box>
                                <Typography>En cambio, si se desea bloquear las cookies analíticas de Google, se puede instalar un complemento en el navegador siguiendo las instrucciones indicadas en el siguiente enlace: <Link href='https://tools.google.com/dlpage/gaoptout.'>https://tools.google.com/dlpage/gaoptout.</Link></Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1 }}>MÁS INFORMACIÓN</Box>
                                <Typography>Para obtener más información sobre el tratamiento de datos, recomendamos visitar nuestra política de privacidad. Además, Cualquier usuario que tenga cualquier duda acerca de estas tecnologías puede remitirnos la consulta a la dirección electrónica info@hartodepagar.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Buttons onClick={handleClose} >CERRAR??</Buttons>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
}
