
import { Layout } from "@/components/layouts";
import { Box, Card, Typography } from "@mui/material";
import { Text } from "../components/textInput/Text"
import ButtonPrimary from "@/components/buttons/ButtonPrimary";

export default function Login() {
    return(
        <><Layout>
        </Layout>
        <Box style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
            <Box className="cardBackground">
                <Typography className="title">
                    Iniciar sesión
                </Typography>
                <Text placeholder={"email@correo.com"} label={"Correo electrónico"}></Text>
                <Text placeholder={"****************"} label={"Contraseña"}></Text>
                <ButtonPrimary text={"Iniciar sesión"} url={"#"}></ButtonPrimary>
        </Box>
        </Box>
        
        </>
    )
}