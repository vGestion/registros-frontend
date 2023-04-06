import CardEvent from "@/components/cards/CardEvent";
import { Layout } from "@/components/layouts";
import { Filter } from "@/components/selector/Filter";
import { Text } from "@/components/textInput/Text";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Layout>
      </Layout>
      <Typography className="title" style={{ display: "flex", justifyContent: "center", fontSize: "28px" }}>
        PRÓXIMOS EVENTOS
      </Typography>
      <Box className="filter">
        <Filter title={"Tipo"}></Filter>
        <Filter title={"Modalidad"}></Filter>
        <Filter title={"Categoría"}></Filter>
        <Filter title={"Fecha"}></Filter>
      </Box>
      <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", width:"85%", margin: "auto" }}>
        <CardEvent image={"https://datalat.org/wp-content/uploads/2023/03/Open-Data-Day-tw-444x250.png"} name={"Open Data Day 2023"} description={" Un evento de encuentro para la  comunidad datera de Quito, donde podrás participar, conocer y aprender sobre el uso de los datos abiertos y la inteligencia artificial en el Ecuador."} url={"https://datalat.org/opendataday2023"} buttonText={"Registrarse"}></CardEvent>
        <CardEvent image={"https://datalat.org/wp-content/uploads/2023/03/Open-Data-Day-tw-444x250.png"} name={"Open Data Day 2023"} description={" Un evento de encuentro para la  comunidad datera de Quito, donde podrás participar, conocer y aprender sobre el uso de los datos abiertos y la inteligencia artificial en el Ecuador."} url={"https://datalat.org/opendataday2023"} buttonText={"Registrarse"}></CardEvent>
      </Box>

    </>
  )
}

