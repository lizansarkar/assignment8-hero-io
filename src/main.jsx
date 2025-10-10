import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router";
import { router } from './route-folder/Route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<span className="loading loading-dots w-32 h-32"></span>}>
          <RouterProvider router={router} />,
    </Suspense>
  </StrictMode>,
)
