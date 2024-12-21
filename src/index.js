import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { ChakraProvider } from '@chakra-ui/react';  

// import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import customRoute from './projectRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   

  <RouterProvider router={customRoute} />
  
  

  
  </>
  
);


