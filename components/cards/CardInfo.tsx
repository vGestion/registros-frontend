import React, { ReactNode } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const CardInfo = (props:{ children?: ReactNode, image:string,  tittle:string, description:string, url?: string}) => {
  return (
    <Card style={{backgroundColor:'transparent', boxShadow:'none', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10px'}}>
      <CardMedia className="image" style={{minWidth:'300px', minHeight:'200px'}} image={props.image}/>
      <CardContent>
      <Typography  className="tittle" style={{fontSize:'18px'}}>
          {props.tittle}
        </Typography>
        <Typography  className="subtitle" style={{fontSize:'15px'}}>
          {props.description}
        </Typography>
      </CardContent>
      
    </Card>
  );
};

export default CardInfo;