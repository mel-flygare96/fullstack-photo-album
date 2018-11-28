import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';

export default createMuiTheme({
    palette: {
        primary: green,
        secondary: deepOrange,
        error: red
    },
    typography: {
        useNextVariants: true
    }
})