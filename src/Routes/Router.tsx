import Main from '@/Layouts/Main'
import Error from '@/pages/Error/Error'
import Home from '@/pages/Home/Home'
import { createBrowserRouter } from 'react-router'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
