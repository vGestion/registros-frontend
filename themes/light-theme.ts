import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[100]
        },
        primary: {
            // main: '#1822B7'
            main: '#DFE0E2'
        },
        secondary: {
            main: '#A7F9EB'
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            }
        }
    }
});