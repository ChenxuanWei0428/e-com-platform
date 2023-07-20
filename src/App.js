import React from 'react';
import {useState} from "react";
import Login from './components/Login';
import Register from './components/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LogoutButton from './components/Logout';

const App = () => {
  const [page, setPage] = useState("register");
  
  function GetPage() {
    switch (page) {
      case "login":
        return <Login/>;
      case "register":
        return <Register/>;
      case "products":
        return <Products/>;
      case "cart":
        return <Cart/>;
      default:
        return "This page does not exist"
    }
  };

  return (
    <div className = "App">
        {GetPage()}
    </div>
  );
};

export default App;
