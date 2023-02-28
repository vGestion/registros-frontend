import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Brightness4OutlinedIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
  )
}
