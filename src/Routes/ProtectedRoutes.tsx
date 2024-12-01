import * as React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (
  props
) => {
  const location = useLocation()

  const isAuth: boolean = false

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default ProtectedRoutes
