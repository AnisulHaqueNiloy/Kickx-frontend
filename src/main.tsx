import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <Toaster/>
    <RouterProvider router={router}></RouterProvider>
   </Provider>
   
   
  </StrictMode>,
)
