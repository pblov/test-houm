
import { types } from './../types/types';


const initialState = {

    dataEmployee: [],
    namesFiltered: [],
    isFetching: false,
    error:'',
    namesFilteredByJob: [],
    filterByJob:'',
    data: true,

}


export const employeeReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.fetchEmployeesRequest:
            return {
                ...state,
                isFetching: true
            }

        case types.fetchEmployeesSuccess:

            return {
                ...state,
                isFetching: false,
                dataEmployee: action.payload
            }

        case types.fetchEmployeesFailure:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case types.searchEmployeesByName:

            let list;


            if(state.filterByJob !== ''){
                list = state.namesFilteredByJob;
            }else{
                list = state.dataEmployee;
            }
            



            const searchByName = list.filter(employee => (employee.name.first + ' ' + employee.name.last).toLowerCase()
                                     .includes(action.payload.toLowerCase()));

            (searchByName.length === 0) ? state.data = false : state.data = true;

            return {
                ...state,
                namesFiltered:searchByName
            }

        case types.filterEmployeeByJob:

            const {job} = action.payload;

            if( job === '' ){
                return { ...state, namesFilteredByJob: [], filterByJob:'' }
            }

           

            const namesFilteredByJob = state.dataEmployee.filter((employee) => employee.jobs === job);

        
            if(state.namesFiltered.length > 0 && namesFilteredByJob.length > 0){
               
                const filterBySearch = state.namesFiltered.filter((employee) => employee.jobs === job);
                return { ...state, namesFiltered: filterBySearch, namesFilteredByJob: filterBySearch  }
            }

    
   

            return {
                ...state,
                namesFilteredByJob,
                filterByJob: job
            }

        
        case types.clearSearchEmployees:
            return {
                ...state,
                data:true,
                namesFiltered: []
            }

        default:
            return state;

    }
}

