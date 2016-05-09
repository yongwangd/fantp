import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import bookAppReducer from './book/bookAppReducer';
import employeeReducer from './employee/employeeReducer';
import todoReducer from './todo/todoReducer';
import authReducer from './auth/authReducer';
import homeReducer from './home/homeReducer';


if(module.hot) {
    module.hot.accept();
}


const rootReducer = combineReducers({
	auth: authReducer,
    bookApp: bookAppReducer,
    employeeApp: employeeReducer,
    todoApp: todoReducer,
    form: formReducer,
    homeApp:homeReducer
});

export default rootReducer;
