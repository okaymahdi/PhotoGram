import { Navigate, Outlet, useLocation } from 'react-router'

const ProtectedRoutes = () => {
  const location = useLocation()

  const isAuth: boolean = false

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default ProtectedRoutes
