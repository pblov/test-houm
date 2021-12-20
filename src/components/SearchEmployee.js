import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box  from '@mui/material/Box';

import { useStyles } from '../styles/employeeNav';
import { clearFilterEmployees, setFilterByName } from './../actions/employees';




export const SearchEmployee = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [focus, setFocus] = useState(false);
    const handleFocus = () => {setFocus(true)};
    const handleBlur = () => {setFocus(false)};

    const [inputValue, setInputValue] = useState('');

    const filterByName = (e) => {
        const value = e.target.value;
        setInputValue(value);
        dispatch(setFilterByName(value));
    }

    const clearButton = () => {
    
        dispatch(clearFilterEmployees());
        setInputValue('');

    } 



  
    return (
        <Box >
            <Paper component="form" className={classes.paper} onBlur={handleBlur} onFocus={(handleFocus)}  style={{border: (focus) && '1px solid #FF452B', backgroundColor: (focus) && '#ECEFF1'}} >

                <InputBase 
                    search={inputValue}
                    autoComplete="off"
                    value={inputValue}
                    className={classes.inputBase}  
                    placeholder="Search employee by name ..."
                    onChange={filterByName}
                    />

                {
                    (inputValue) ? <IconButton onClick={clearButton} className={classes.icons}>
                                        <CloseIcon />
                                    </IconButton>

                                 : <SearchIcon className={classes.icons}/>
                }

                

                
              

            </Paper>
        </Box>
    )
}
