import React from 'react'
import Box  from '@mui/material/Box';

import { FilterEmployee } from './FilterEmployee';
import { SearchEmployee } from './SearchEmployee';

import { useStyles } from '../styles/employeeNav';


export const EmployeeNavbar = () => {

    const classes = useStyles();

    return (
        
        <Box className={classes.navContent} >
            
            <SearchEmployee/>
            <FilterEmployee/>
        </Box>
        
    ) 
}
