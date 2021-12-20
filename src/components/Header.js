import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const Header = () => {


    return (
        <Box mb={5}>
            <AppBar position="static" sx={{ backgroundColor:'#263238' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ fontWeight:'bold', flexGrow:'1', textAlign:'center' }} component="div">
                        Employee App 
                    </Typography>
                
                </Toolbar>
            </AppBar>
        </Box>
    )
}
