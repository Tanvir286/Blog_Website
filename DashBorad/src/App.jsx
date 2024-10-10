import React from 'react';

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Registration from './pages/Registration';
import Error from './pages/Error';
import EmailVerify from './pages/Verify/EmailVerify';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import CreateBlog from './pages/CreateBlog/CreateBlog';


  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>      
        <Route path='*'  element={<Error/>}/>  
        <Route path='/' element={< Registration/>}/>
        <Route path='/emailVerification/:token' element={<EmailVerify/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}>
            <Route path='createBlog' element={<CreateBlog/>}/>
         </Route>    
      </Route>
    )
  );

  const App = () => {
    return <RouterProvider router={router} />;
  };

export default App;