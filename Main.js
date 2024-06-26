import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
//outlet is used to render that nested route 
const Main = () => {
  return( <div>
    <Header />
    <Outlet/>
    <Footer/>
  </div>
  );
};

export default Main;