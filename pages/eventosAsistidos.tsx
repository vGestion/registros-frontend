
import { Layout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import CardEvent from "@/components/cards/CardEvent";
import { Filter } from "@/components/selector/Filter";

export default function EventosAsistidos() {
    return(
        <><Layout>
        </Layout>
        <Typography className="title" style={{ display: "flex", justifyContent: "center", fontSize: "28px" }}>
                    EVENTOS ASISTIDOS
        </Typography>
        {/* <Box className="filter">
  <Filter title={"Tipo"}></Filter>
  <Filter title={"Modalidad"}></Filter>
  <Filter title={"Categoría"}></Filter>
  <Filter title={"Fecha"}></Filter>
</Box> */}
        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", width:"85%", margin: "auto" }}>
            
         </Box>
        
        </>
    )
}