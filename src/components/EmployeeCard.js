

import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { CardHeader, Avatar, IconButton } from '@mui/material';

import { useStyles } from '../styles/employeeCard';


export const EmployeeCard = ({data}) => {

    const classes = useStyles();

    const { name, picture, jobs, phone, email, location, dob } = data;

    const [activeIcon, setActiveIcon] = useState(0);
    
    const date = new Date(dob.date).toDateString();



    const getDate = () => {
        const date = new Date(dob.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }


    const address = `${location.street.name} #${location.street.number}, ${location.country}.`;

    const PhrasesGenerator = () => {
        


        const phrases = [
            `My address is`,
            `My phone number is`,
            `My email is`,
            `My date of birth is  `,
        ];

        const dataPhrases = [
            `${address}`,
            `${phone}.`,
            `${email}.`,
            `${getDate()}.`
        ]

        return <>
                    <Typography variant="subtitle1" sx={{ fontSize: 18 }} > {phrases[activeIcon]} </Typography>
                    <Typography variant="h5" mt={1} sx={{fontWeight:'600', fontSize:'15px', textTransform:'uppercase'}} > {dataPhrases[activeIcon]}</Typography>   
               </>
    }

    const handleInfoIcon = (index) => {

        setActiveIcon(index);
        
    }


    return (
    
                <Grid item xs={12} sm={6} md={4} xl={3}  >
                        <Card className={classes.card}>
                            <CardHeader className={classes.cardHeader}  />

                            
                            <CardContent className={classes.cardContentTop}>
                                <Avatar 
                                    src={picture.large}
                                    sx={{ width: 120, height: 120, marginTop:'-80px' }} 
                                />                   
                                <Typography variant="h5" mt={3}component="div" sx={{fontWeight:'700'}} gutterBottom>
                                    {name.first} {name.last}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }} variant="subtitle1" color="text.secondary">
                                    {jobs}
                                </Typography>
                            
                                <Divider className={classes.hr} sx={{ height: 28, m: 0.5, width:'100%' }} />
                            </CardContent>

                            <CardContent className={classes.cardContentBottom}>

                                <PhrasesGenerator/>
                               
                                <Grid container mt={3} justifyContent="center">
                                    <Grid item  >
                                    <IconButton className={classes.icons} onClick={ () => handleInfoIcon(0) } >
                                        <HomeIcon />
                                    </IconButton>
                                    <IconButton className={classes.icons} onClick={ () => handleInfoIcon(1) } >
                                        <PhoneIcon  />
                                    </IconButton>
                                    <IconButton className={classes.icons} onClick={ () => handleInfoIcon(2) } >
                                        <EmailIcon />
                                    </IconButton>    
                                        
                                    <IconButton className={classes.icons} onClick={ () => handleInfoIcon(3) } >
                                        <CalendarTodayIcon />
                                    </IconButton>       

                                    </Grid>
                                
                                </Grid>

                            </CardContent>
                        </Card>
                </Grid>

                
          
        
    )
}
