
import { Provider } from 'react-redux';
import { EmployeeNavbar } from './components/EmployeeNavbar';
import { Header } from './components/Header';
import { EmployeeList } from './components/EmployeeList';
import { store } from './store/store';





export const EmployeeApp = () => {


  return (
   
      <Provider store={store} >
          <Header/>
          <EmployeeNavbar/>
          <EmployeeList/>
      </Provider>
  
  );
}
