import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: red
    },
    typography: {
        useNextVariants: true
    }
})