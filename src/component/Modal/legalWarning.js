import React from 'react'
import Dialog from '@mui/material/Dialog';
import Buttons from '../Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function LegalWarning({ open, setOpen, scroll }) {

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
                            <Typography sx={{ fontWeight: 700, textAlign: "center" }} variant='h5'>“AVISO LEGAL Y CONDICIONES DE USO” </Typography>
                            <Box component="ul" sx={{ overflowY: "auto", height: "90%", listStyle: "none" }}>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>PRIMERO.- TITULAR DE LA WEB</Box>
                                <Typography>El presente portal web pertenece a ALTEL COMUNICACIONES XXI SL, con CIF B67730994, sita en Calle Santander Número1 4 C  código postal 28922 de Alcorcon e inscrita en el registro mercantil de Madrid en el Tomo 41774, Folio 118, Sección 8º, Hoja H M739972. (en adelante HARTODEPAGAR), pudiendo contactar en el correo electrónico info@hartodepagar.com</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>SEGUNDO.- ACCESO A LA WEB </Box>
                                <Typography pb={1}>HARTODEPAGAR pone a disposición del público (en adelante usuario), que acceda a la presente página web (en adelante WEB), información sobre los productos y servicios propios (en adelante CONTENIDOS y/o SERVICIOS).</Typography>
                                <Typography>El acceso a determinadas secciones del portal requerirá la adquisición de la condición de usuario registrado, para ello, se deberá seguir los pasos indicados.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>TERCERO.- UTILIZACIÓN CORRECTA DE LOS SERVICIOS</Box>
                                <Typography pb={1}>El usuario se obliga a usar los Servicios de forma diligente, correcta y lícita y, en particular, a título meramente enunciativo y no limitativo, queda terminantemente prohibido:</Typography>
                                <Box sx={{ pb: 1, listStyle: "disc" }} component="ul">
                                    <Box component="li">Utilizar los Servicios de forma, con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden público;</Box>
                                    <Box component="li">Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los Servicios, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido;</Box>
                                    <Box component="li">Realizar cualquier acto que pueda ser considerado una vulneración de cualesquiera derechos de propiedad intelectual o industrial pertenecientes a HARTODEPAGAR o a terceros;</Box>
                                    <Box component="li">Emplear los Servicios y, en particular, la información de cualquier clase obtenida a través del Sitio Web para remitir publicidad, comunicaciones con fines de venta directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de personas con independencia de su finalidad, así como de comercializar o divulgar de cualquier modo dicha información;</Box>
                                </Box>
                                <Typography pb={1}>El usuario responderá de los daños y perjuicios de toda naturaleza que HARTODEPAGAR pueda sufrir, con ocasión del incumplimiento de cualquiera de las obligaciones anteriormente expuestas así como cualesquier otras incluidas en las presentes Condiciones Generales y/o las impuestas por la Ley en relación con la utilización del Sitio Web.</Typography>
                                <Typography pb={1}>Todo usuario menor de edad deberá utilizar la Web bajo el consentimiento de su padre, madre o tutor legal, siendo estos los responsables de cualquier problema que pudiera acontecer en el uso de los servicios de la misma.</Typography>
                                <Typography>HARTODEPAGAR velará en todo momento por el respeto del ordenamiento jurídico vigente, y estará legitimada para interrumpir, a su entera discreción, el Servicio o excluir al usuario del Sitio Web en caso de presunta comisión, de alguno de los delitos o faltas tipificados por el Código Penal vigente, o en caso de observar cualesquiera conductas que a juicio de HARTODEPAGAR resulten contrarias a estas Condiciones Generales o puedan perturbar el buen funcionamiento, imagen, credibilidad y/o prestigio de HARTODEPAGAR</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>CUARTO.- REGLAS DE CONDUCTA</Box>
                                <Typography pb={1}>Los usuarios podrán contactar con HARTODEPAGAR e interactuar en determinadas secciones del portal web, por ejemplo compartiendo secciones en redes sociales, siempre y cuando respeten el presente código de conducta:</Typography>
                                <Typography pb={1}> 1. NINGÚN USUARIO PODRÁ HACERSE PASAR POR OTRA PERSONA U ORGANIZACIÓN, en caso contrario puede incurrir en falta o delito según el Código Penal y el Código Civil Español.</Typography>
                                <Typography pb={1}>2. NO SE PODRÁ UTILIZAR UN LENGUAJE IRRESPETUOSO Y OFENSIVO. No son admisibles mensajes con amenazas, insultos graves o cualquier otro tipo de comentario que pueda herir la sensibilidad. En tal caso, HARTODEPAGAR se reserva el derecho de retirar cualquier contenido que contravenga la presente condición y ejercitar las vías judiciales oportunas.</Typography>
                                <Typography pb={1}>3. QUEDA TOTALMENTE PROHIBIDO presentar, citar y recomendar empresas, o portales web, y en general realizar acciones de marketing o spam. Ese tipo de contenidos serán eliminados junto con las cuentas que llevaron a cabo tal acción e incluso ponerlo en conocimiento de la Agencia Española de Protección de Datos.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>SEXTO.- EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD</Box>
                                <Typography pb={1}>HARTODEPAGAR se reserva el derecho a interrumpir el acceso a los servicios en cualquier momento y sin previo aviso, ya sea por motivos técnicos, de seguridad, de control, de mantenimiento, por fallos de suministro eléctrico o por cualquier otra causa justificada.</Typography>
                                <Typography pb={1}>En consecuencia, HARTODEPAGAR no garantiza la fiabilidad, la disponibilidad ni la continuidad de la Web ni de los Servicios, por lo que la utilización de los mismos por parte de los usuarios se lleva a cabo por su propia cuenta y riesgo, sin que, en ningún momento, puedan exigirse responsabilidades a HARTODEPAGAR en este sentido.</Typography>
                                <Typography pb={1}>Además HARTODEPAGAR no asume responsabilidad alguna derivada, a título enunciativo pero no limitativo:</Typography>
                                <Box sx={{ pb: 1, listStyle: "disc" }} component="ul">
                                    <Box component="li">De la utilización que los usuarios hagan de los materiales dispuestos en la web, ya sean prohibidos o permitidos, en infracción de los derechos de propiedad intelectual y/o industrial de contenidos de la propia web o de los portales de terceros.</Box>
                                    <Box component="li">De los eventuales daños y perjuicios a los usuarios causados por un funcionamiento normal o anormal de las herramientas de búsqueda, de la organización o la localización de los contenidos y/o acceso a los servicios y, en general, de los errores o problemas que se generen en el desarrollo o instrumentación de los elementos técnicos que forman el servicio.</Box>
                                    <Box component="li">De los contenidos de aquellas páginas a las que los usuarios puedan acceder desde enlaces incluidos en la web. </Box>
                                    <Box component="li">De los actos u omisiones de terceros, con independencia de que estos terceros pudiesen estar unidos a HARTODEPAGAR mediante vía contractual.</Box>
                                </Box>
                                <Typography pb={1}>De igual modo, HARTODEPAGAR excluye cualquier responsabilidad por los daños y perjuicios de toda clase que puedan deberse a la presencia de virus o a la presencia de otros elementos lesivos en los contenidos que puedan producir alteración en los sistemas informáticos así como en los documentos o sistemas almacenados en los mismos, por lo que HARTODEPAGAR no será responsable en ningún caso cuando se produzcan:</Typography>
                                <Box sx={{ pb: 1, listStyle: "disc" }} component="ul">
                                    <Box component="li">Errores o retrasos en el acceso a los servicios por parte del usuario a la hora de introducir sus datos en el formulario correspondiente o cualquier anomalía que pueda surgir cuando estas incidencias sean debidas a problemas en la red Internet, causas de caso fortuito o fuerza mayor y cualquier otra contingencia imprevisible ajena a la buena fe de HARTODEPAGAR</Box>
                                    <Box component="li">Fallos o incidencias que pudieran producirse en las comunicaciones, borrado o transmisiones incompletas, de manera que no se garantiza que los servicios del sitio web estén constantemente operativos.</Box>
                                    <Box component="li">De los errores o daños producidos al sitio web por un uso del servicio ineficiente y de mala fe por parte del usuario.</Box>
                                    <Box component="li">De la no operatividad o problemas en la dirección de email facilitada por el usuario para el envío de la información solicitada.</Box>
                                </Box>
                                <Typography>En todo caso, HARTODEPAGAR se compromete a solucionar los problemas que puedan surgir y a ofrecer todo el apoyo necesario al usuario para llegar a una solución rápida y satisfactoria de la incidencia</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>SÉPTIMO.- ENLACES A OTROS SITIOS WEB</Box>
                                <Typography pb={1}>HARTODEPAGAR no garantiza ni asume ningún tipo de responsabilidad por los daños y perjuicios sufridos por el acceso al Servicios/contenido de terceros a través de conexiones, vínculos o links de los sitios enlazados ni sobre la exactitud o fiabilidad de los mismos. La función de los enlaces que aparecen en HARTODEPAGAR es exclusivamente la de informar al usuario sobre la existencia de otras fuentes de información en Internet, donde podrá ampliar los Servicios ofrecidos por el Portal. HARTODEPAGAR no será en ningún caso responsable del resultado obtenido a través de dichos enlaces o de las consecuencias que se deriven del acceso por los usuarios a los mismos. Estos Servicios de terceros son proporcionados por éstos, por lo que HARTODEPAGAR no puede controlar y no controla la licitud de los Servicios ni su calidad. En consecuencia, el usuario debe extremar la prudencia en la valoración y utilización de la información y servicios existentes en los contenidos de terceros.</Typography>
                                <Typography>Queda expresamente prohibida la introducción de hiperenlaces con fines mercantiles en páginas web ajenas a HARTODEPAGAR que permitan el acceso al presente portal web sin consentimiento expreso de HARTODEPAGAR En todo caso, la existencia de hiperenlaces en sitios web ajenos a la empresa, no implicará en ningún caso la existencia de relaciones comerciales o mercantiles con el titular de la página web donde se establezca el hiperenlace, ni la aceptación por parte de HARTODEPAGAR.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>OCTAVO.- TRATAMIENTO DE DATOS Y UTILIZACIÓN DE COOKIES</Box>
                                <Typography pb={1}>De acuerdo con lo establecido en la normativa de protección de datos, le informamos de que los datos personales que nos facilite a través de nuestro sitio web o mediante envíos de correos electrónicos, serán tratados por SUESCUN INIESTA COMUNICACIONES SL en su calidad de responsable del tratamiento, bajo la legitimidad otorgada por el consentimiento prestado por el usuario para las finalidades descritas en la política de privacidad, la cual debe ser leída, comprendida y aceptada para la utilización del presente portal web.</Typography>
                                <Typography pb={1}>El usuario responderá, en cualquier caso, de la veracidad de los datos facilitados y podrá ejercitar los derechos de acceso, supresión, rectificación, oposición, limitación del tratamiento y portabilidad, mediante escrito dirigido a la empresa, bien a su domicilio social, bien a través de correo electrónico a info@ahoraahorro.es siempre y cuando acredite su identidad. Y en el caso de que lo estime oportuno, podrá acudir a la Agencia Española de Protección de Datos.</Typography>
                                <Typography pb={1}>Por su parte, HARTODEPAGAR se compromete al cumplimiento de la obligación de secreto de los datos de carácter personal, por ello ha adoptado las medidas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta en todo momento del estado de la tecnología.</Typography>
                                <Typography>Por otra parte, HARTODEPAGAR le informa que por visitar el presente portal web no queda registrado de forma automática ningún dato de carácter personal que identifique a un Usuario, ni tampoco usamos cookies o tecnologías similares.</Typography>
                                <Box component="li" sx={{ fontWeight: 700, py: 1, fontStyle: "italic" }}>NOVENO.- LEY APLICABLE Y JURISDICCIÓN</Box>
                                <Typography>Para cuantas cuestiones interpretativas o litigiosas que pudieran plantearse será de aplicación la legislación española y en caso de controversia, ambas partes acuerdan someterse, con renuncia a cualquier otro fuero que pudiera corresponderle, a la jurisdicción de los Juzgados y Tribunales de la ciudad de Madrid (España).</Typography>
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
