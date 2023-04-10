import { Layout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
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
                            Crear cuenta
                        </Typography>
                    </Box>
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Text placeholder={"Ana Maria"} label={"Nombres"}></Text>
                            <Text placeholder={"Perez Rios"} label={"Nombres"}></Text>
                            <Text placeholder={"Ana Maria"} label={"Fecha de nacimiento"}></Text>
                            <Filter title={"Sexo"}></Filter>
                            <Filter title={"Genero"}></Filter>
                            <Text placeholder={"1700000000"} label={"Cedula o pasaporte"}></Text>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Text placeholder={"email@email.com"} label={"Correo electronico"}></Text>
                            <Text placeholder={"email@email.com"} label={"Confirme su correo electronico"}></Text>
                            <Text placeholder={"***************"} label={"Contrasena"}></Text>
                            <Text placeholder={"***************"} label={"Confirme su Contrasena"}></Text>
                            <Text placeholder={"Ecuador"} label={"Pais de residencia"}></Text>
                            <Text placeholder={"Ecuatoriana"} label={"Nacionalidad"}></Text>
                        </Box>
                    </Box>
                    <Box>
                        <ButtonPrimary text={"Registrarse"} url={"#"}></ButtonPrimary>
                    </Box>


                </Box>

            </Box>


        </>
    )
}