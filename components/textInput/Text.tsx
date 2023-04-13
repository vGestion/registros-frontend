import { TextField } from '@mui/material';
import React from 'react';

export const Text = (props: { placeholder: string, label:string }) => {


    return (
        <TextField label={props.label} color="primary" style={{margin: "15px"}} focused placeholder={props.placeholder} ></TextField>

    )
}

