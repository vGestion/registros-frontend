import { TextField } from '@mui/material';
import React from 'react';

export const TextRead= (props: { value: string, label:string }) => {


    return (
        <TextField label={props.label} color="primary" style={{margin: "15px"}} focused value={props.value} InputProps={{readOnly: true, }}></TextField>

    )
}

