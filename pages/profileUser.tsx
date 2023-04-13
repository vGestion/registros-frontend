import { Layout } from "@/components/layouts";
import { Box, Typography} from "@mui/material";
import { Text } from "../components/textInput/Text"
import { Filter } from "../components/selector/Filter"
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { TextRead } from "@/components/textInput/TextRead";



export default function Login() {
    return (
        <><Layout>
        </Layout>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box className="cardBackground">
                    <Box>
                        <Typography className="title">
                            Perfil 
                        </Typography>
                    </Box>
                        <Box style={{ display: "flex", flexDirection: "row" }}>
                        
                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <TextRead value={"Ana Maria"} label={"Nombres"} ></TextRead>
                            <TextRead value={"Perez Rios"} label={"Nombres"}></TextRead>
                            <TextRead value={"03/03/1992"} label={"Fecha de Nacimiento"}></TextRead>
                            <TextRead value={"Femenino"} label={"Sexo"}></TextRead>
                            <TextRead value={"Femenino"} label={"Genero"}></TextRead>
                        </Box>

                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                             <TextRead value={"ana@gmail.com"} label={"Correo electronico"}></TextRead>
                             <TextRead value={"*********"} label={"Contrasena"}></TextRead>               
                             <TextRead value={"1726357588"} label={"Cedula o pasaporte"}></TextRead>            
                             <TextRead value={"Ecuador"} label={"Pais de residencia"}></TextRead>                            
                             <TextRead value={"Ecuatoriana"} label={"Nacionalidad"}></TextRead>                            
                        </Box>

                    </Box>
                     </Box>

            </Box>


        </>
    )
}