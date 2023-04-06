import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material';
import ButtonPrimary from '../buttons/ButtonPrimary';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar className='header'>
        <Link href="https://datalat.org/">
        <Box component="img" src="/principal_blanco.png" className="logo">
        </Box>
        </Link>
        
        <ButtonPrimary text={'Iniciar Sesión'} url={'https://datalat.org/'}></ButtonPrimary>
      </Toolbar>
    </AppBar>
  )
}
