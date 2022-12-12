import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
    
    palette:{
        primary:{
            main:"#251749"
        },
        secondary:{
            main:"#678983"
        },
        myColor:{
            main: colors.brown[500],
            light:colors.brown[200],
            dark:colors.brown[700]
        }

    },
   
  });



  export default theme;