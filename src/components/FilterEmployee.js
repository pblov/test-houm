import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box  from '@mui/material/Box';

import { useStyles } from '../styles/employeeNav';
import { filterJob } from './../actions/employees';

export const FilterEmployee = () => {

    
    const [value, setValue] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
   
    const handleChange = (event) => {
         const value = event.target.value;
         dispatch(filterJob(value));
         setValue(value);
    };

    return (
        <Box className={classes.filterContainer}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Job</InputLabel>
                <Select
                    label="Job"
                    value={value}
                    onChange={handleChange}
                    
                >
                    <MenuItem value=''>None</MenuItem>
                    <MenuItem value='Frontend Developer'>Frontend Developer</MenuItem>
                    <MenuItem value='Backend Developer'>Backend Developer</MenuItem>
                    <MenuItem value='FullStack Developer'>FullStack Developer</MenuItem>
                    <MenuItem value='Data Architect'>Data Architect</MenuItem>
                    <MenuItem value='UX Designer'>UX Designer</MenuItem>
                </Select>
            </FormControl>
        </Box>
        
    )
}
