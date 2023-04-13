
import { Layout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import CardInfo from "@/components/cards/CardInfo";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { QR } from "@/components/utils/QR";




export default function InfoEvento() {
    function createData(name: string, value: string) {
        return { name, value };
    }
    const rows = [
        createData('Fecha:', 'Sábado, 1 de abril de 2023'),
        createData('Hora:', '10:00 a.m. (ECU)'),
        createData('Modalidad:', 'Prescencial'),
        createData('Locación:', 'Auditorio 1 EARME (5to piso) – Escuela Politécnica Nacional'),
    ];
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(5);

    return (
        <><Layout>
        </Layout>
        <Typography className="title" style={{textAlign:'center'}} >
                            Informacion del evento
                        </Typography>
          
            <Box className="cardMain" style={{ width: '60%', margin: 'auto', flexDirection: 'column', padding: '40px', marginTop: '40px', marginBottom: '40px'}}>
                
                <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                
                    <CardInfo
                        image={"https://datalat.org/wp-content/uploads/2023/03/Open-Data-Day-tw-444x250.png"}
                        tittle={"Open Data Day UIO 2023: Una mirada a la IA y los datos en Ecuador"}
                        description={"Como parte de la celebración anual de los datos abiertos Fundación Datalat, Fundación Openlab y el HUB UIO de la Escuela Politécnica Nacional nos unimos para el  Open Data Day UIO 2023: Una mirada a la IA y los datos en Ecuador. Un evento de encuentro para la  comunidad datera de Quito, donde podrás participar, conocer y aprender sobre el uso de los datos abiertos y la inteligencia artificial en el Ecuador."}>
                    </CardInfo>
                </Box>
                <TableContainer component={Paper} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" style={{ width: 300, borderBlockColor: 'white' }}  >
                                        {row.name}
                                    </TableCell>
                                    <TableCell style={{ width: 300, borderBlockColor: 'white' }} align="right">
                                        {row.value}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <QR image={"https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"}></QR>
                </Box>  
                
            </Box>
            
        </>
    )
}




