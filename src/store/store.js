import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer } from './../reducers/employeeReducer';

const composeEnchancers = (typeof window !== "undefined" &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    employees:employeeReducer
});




//Middleware necesario para trabajar con acciones asíncronas en la app.

export const store = createStore(
    reducers,
    composeEnchancers(
        applyMiddleware(thunk)
    )
);