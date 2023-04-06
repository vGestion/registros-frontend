import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export const QR = (props:{image:string}) => {
    return (
        <Card className="cardQr">
      <CardMedia className="imageQr" image={props.image}/>
      <CardContent>
        <Typography style={{fontSize: "20px", fontWeight: "400"}}>
            CÓDIGO QR
        </Typography>
      </CardContent>
    </Card>
    )
}