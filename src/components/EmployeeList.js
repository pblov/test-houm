import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Grid  from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination  from '@mui/material/Pagination';
import usePagination from '../hooks/usePagination';
import  Typography  from '@mui/material/Typography';

import { EmployeeCard } from './EmployeeCard';
import { fetchEmployees } from '../actions/employees';

import { useStyles } from '../styles/employeeCard';


export const EmployeeList = () => {
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const { data, isFetching } = useSelector(state => state.employees);
    const employeesByName = useSelector(state => state.employees.namesFiltered);
    const employees = useSelector((state) => {

        if (state.employees.filterByJob !== '' && employeesByName.length === 0 ) {
            return state.employees.namesFilteredByJob;
            
        }

        if(employeesByName.length > 0 ){
            return employeesByName;
        }

        return state.employees.dataEmployee;


    });

    
    const totalPerPage = 10;
    const count = Math.ceil(employees.length / totalPerPage);
    const dataPagination = usePagination(employees , totalPerPage);

    const handleChange = (e,value) => {
        setPage(value);
        dataPagination.jump(value);
      };

    return (
        <Grid container className={classes.sectionContainer} spacing={6} justifyContent="flex-start">
            
            {
                          (isFetching) ? <Grid container justifyContent="center" my={24}>
                                                <CircularProgress size={100} thickness={5} className={classes.colorLoader}  />
                                          </Grid>
                                       : (!data) ? <Grid container justifyContent="center" mt={8}>
                                                        <Typography>No match data... </Typography>
                                                    </Grid>
                                                  : dataPagination.currentData().map((data,index) => <EmployeeCard key={index} index={index} data={data}/>)
                                       
            }

            {
                (!data) ?  <p/>  
                         :  <Grid container  justifyContent="center" my={6}>
                                <Pagination 
                                        count={count} 
                                        page={page}
                                        onChange={handleChange}/>
                            </Grid>  
            }
            
        </Grid>

    )
}
