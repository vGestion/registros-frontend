import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from "@mui/system";
import ButtonPrimary from '../buttons/ButtonPrimary';

const CardEvent = (props:{image:string, name:string, description:string, url: string, buttonText:string}) => {
  return (
    <Card className="cardMain">
      <CardMedia className="image" image={props.image}/>
      <CardContent>
        <Typography className="title">
          {props.name}
        </Typography>
        <Typography  className="subtitle">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="buttonContainer">
        <ButtonPrimary text={props.buttonText} url={props.url} />
      </CardActions>
    </Card>
  );
};

export default CardEvent;