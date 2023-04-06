import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React from 'react';

export const Text = (props: { placeholder: string, label:string }) => {


    return (
        <TextField label={props.label} color="primary" focused placeholder={props.placeholder}></TextField>

    )
}

