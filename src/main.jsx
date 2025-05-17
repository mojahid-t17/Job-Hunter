import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AuthProvider from './Providers/AuthProvider.jsx';
import Router from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
