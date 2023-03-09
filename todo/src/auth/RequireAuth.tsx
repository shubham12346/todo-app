import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './authUser'
type RequireAuthProp = {
    children: React.ReactNode,

}
const RequireAuth =
    ({ children }: any) => {
        const user = useAuth()
        const location = useLocation();
        if (!user?.userToken) {
            return (<Navigate to='/' state={{ path: location.pathname }} />)

        }

        return children;
    }

export default RequireAuth