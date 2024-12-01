import ProtectedRoutes from '@/Routes/ProtectedRoutes'
import Main from '@/Layouts/Main'
import Login from '@/pages/Authentication/Login/Login'
import Register from '@/pages/Authentication/Register/Register'
import Error from '@/pages/Error/Error'
import Home from '@/pages/Home/Home'
import MyPhotos from '@/pages/MyPhotos/MyPhotos'
import Post from '@/pages/Post/Post'
import Profile from '@/pages/Profile/Profile'
import { createBrowserRouter } from 'react-router'

export const Router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/post',
        element: <Post />,
        errorElement: <Error />,
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: '/myphotos',
        element: <MyPhotos />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
  },

  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])
