import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Form } from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Navigation';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Login } from './Login';
import { store } from './store';
import { Provider } from 'react-redux';
import { Teacher } from './Teacher';
import { Student } from './Student';
import { Admin } from './Admin';
import  {View } from './View';
import { Update } from './Update';
import { ViewLogin } from './ViewLogin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}></Route>
        <Route path='/register' element={<Form/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/teacher' element={<Teacher/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/view' element={<View/>}></Route>   
        <Route path='/update/:id' element={<Update/>}></Route> 
        <Route path='/viewlogin/:id' element={<ViewLogin/>}></Route>      
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
