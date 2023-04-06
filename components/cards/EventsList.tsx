import { Card } from "@mui/material";

const EventsList = ({eventos}) => {
  console.log(eventos)
  return (
    <Card></Card>
  );
};

export async function getServerSideProps(){
    
    const url= "http://localhost:3001/eventos?propiedad=name&orden=1"
    const respuesta = await fetch(url)
    const eventos = await respuesta.json()
    
    console.log(eventos)
    return{ props:{ eventos } }
  }

export default EventsList;
