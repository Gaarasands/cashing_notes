import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../pages/user/loginform';

const withAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  if (!token) {
    navigate('/signin');
    return null; // Return null or a placeholder while redirecting
  } else {
    const path = 'user/';

    const userroute = createBrowserRouter([
      {
        path: path + 'home/',
        element: <LoginForm />,
      },
      // Add more routes here
    ]);

    return userroute;
  }
};

export default withAuth;
