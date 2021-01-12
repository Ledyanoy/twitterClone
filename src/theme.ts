//@ts-nocheck
import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';


export const theme = createMuiTheme({
    typography: {
        fontFamily: ['system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ],
    },
    palette: {
        primary: {
            main: 'rgb(29,161,242)',
            dark: 'rgb(26,145,218)',
            contrastText: '#fff'
        },
        secondary: {
            main: 'rgb(29,145,218)',
        },
        error: {
            main: red.A400
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
            },
            outlined: {
                border: '1px solid rgb(29,161,242)'
            }
        }
    }
});