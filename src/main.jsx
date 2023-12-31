import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routers/Routers';
import AuthProviders from './Providers/AuthProviders';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(



  <div className="bg-lime-300">

    <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
        <AuthProviders>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProviders>
      </React.StrictMode>,

    </div>


  </div>

)
