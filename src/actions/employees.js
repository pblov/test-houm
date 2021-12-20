
import { types } from '../types/types';

export const fetchingEmployeesRequest = () => {
    return {
        type: types.fetchEmployeesRequest
    }
}

export const fetchingEmployeesSuccess = (employees) => {
    return {
        type: types.fetchEmployeesSuccess,
        payload: employees
    }
}

export const fetchingEmployeesError = (error) => {
    return {
        type: types.fetchEmployeesFailure,
        payload: error
    }
}


export const fetchEmployees = () => {

    return async (dispatch) => {

        dispatch(fetchingEmployeesRequest());

        try{

            const response = await fetch(`https://randomuser.me/api/?results=150&nat=es`);
            const data = await response.json();
            const jobs = ['Frontend Developer','Backend Developer','FullStack Developer','Data Architect','UX Designer'];
            data.results.map(user => {
            user.jobs = jobs[Math.floor(Math.random() * jobs.length)];
            return user;
            });

            dispatch(fetchingEmployeesSuccess(data.results));


        }catch(error){
            dispatch(fetchingEmployeesError(error));
        }
    }
}


export const setFilterByName = (name) => {
    return {
        type: types.searchEmployeesByName,
        payload: name
    }
}


export const clearFilterEmployees = () => {

    return {
        type: types.clearSearchEmployees
    }

}

export const filterJob = (job) => ({

    type: types.filterEmployeeByJob,
    payload: {job}

});