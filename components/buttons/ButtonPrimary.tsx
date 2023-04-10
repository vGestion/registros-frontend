import React, { ReactNode } from 'react';
import { Button, CssBaseline, Link } from '@mui/material';

const ButtonPrimary = (props:{text: string, url?:string,   children?: ReactNode, onClick?: () => void}) => {
  return (
    
    <Link href={props.url} style={{textDecoration: "none"}}>
      <CssBaseline />
      <Button variant="contained" size="small" className="primaryButton">{props.text}</Button>
    </Link>
    
  );
};

export default ButtonPrimary;