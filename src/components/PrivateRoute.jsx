import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () => {
    const token = JSON.parse(localStorage.getItem("Name"));
    // const navigate =useNavigate();
    return token ? (
        <Outlet />
    ) : (
     <Navigate to="/login"/>
    );
  };
  export default PrivateRoute