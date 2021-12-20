
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    sectionContainer:{
    
      padding:'0px 150px',
      [theme.breakpoints.down('sm')]: {
        padding:'0px 50px',

      }
    },
    
    cardHeader:{
      backgroundColor: '#FF452B',
      height:'60px',
      
    },

    cardContentTop:{
     
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },

    cardContentBottom:{
      textAlign:'center',
    },
  
    card:{

        minHeight:'470px',

        "&:hover":{
          backgroundColor:'#ECEFF1',
          transform: 'scale(1.05)',
          transition: 'all 0.5s 0s ease',
      }
    },
  
    icons:{
        "&:hover": {
            color: "#FF452B",
            transition:"all 0.3s ease-in-out"
        },
    },

    colorLoader:{
        color: '#FF452B',
    },
  
    hr:{
  
        height:28,
        width:'100%',
        margin:0.5,
  
    },


  }));