import { Layout } from "@/components/layouts";
import { Box, Button, Typography } from "@mui/material";
import { Text } from "../components/textInput/Text"
import { Filter } from "../components/selector/Filter"
import ButtonPrimary from "@/components/buttons/ButtonPrimary";

export default function Login() {
    return (
        <><Layout>
        </Layout>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box className="cardBackground">
                    <Box>
                        <Typography className="title">
                            Crear evento
                        </Typography>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "row", alignItems:"start" }}>
                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Text placeholder={"Datajam 2023"} label={"Nombre del evento"}></Text>
                            <Text placeholder={"25/03/2023"} label={"Fecha de inicio"}></Text>
                            <Text placeholder={"30/03/2023"} label={"Fecha de Finalizaci[on"}></Text>
                            <Filter title={"Categoria"}></Filter>
                            <Filter title={"Modalidad"}></Filter>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Text placeholder={"Esta es la descripcion del evento, contiene informacion importante como la tematica, lugar y fechas"} label={"Descripcion"}></Text>
                            <Text placeholder={"email@email.com"} label={"Imagen"}></Text>
                            <Button className="primaryButtonBlue">Formulario de registro</Button>
                        </Box>
                    </Box>
                    <Box>
                        <ButtonPrimary text={"Registrarse"} url={"https://datalat.org/"}></ButtonPrimary>
                    </Box>
                </Box>
            </Box>
        </>
    )
}