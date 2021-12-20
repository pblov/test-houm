
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles( theme => ({

    //Nav content

    navContent:{
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap-reverse',
        margin:'0px 150px',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
            margin:'0px 50px'
        },
        marginBottom:'40px',
        

    },

    //Search content

    paper:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '350px',
        [theme.breakpoints.down('sm')]: {
            width:'100%'
        },
       
    },

    inputBase:{
        marginLeft: '10px',
        caretColor: '#FF452B',
        flex:1,
    },

    icons:{
        padding:'10px',
        color: "#FF452B",
        "&:hover": {
            
            transition:"all 0.3s ease-in-out"
    }},

    closeIcon:{
      "&:hover": {
            color: "#FF452B",
            transition:"all 0.3s ease-in-out"
    }},
    

    //Filter content 
    
    filterContainer:{
        display:'flex',
        [theme.breakpoints.down('sm')]: {
            margin: '20px 0px'
        },
        
    }



}));
