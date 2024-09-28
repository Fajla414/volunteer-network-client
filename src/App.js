import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Collection from './components/Collection/Collection';

export const MyContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <MyContext.Provider className="bg-body-tertiary" value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/registerVolunteer/item/:id' element={<PrivateRoute><RegisterVolunteer /></PrivateRoute>} />
          <Route path='/collection' element={<PrivateRoute><Collection /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;