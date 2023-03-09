import { createContext, useState, useContext } from 'react'

type UserContextProp = {
    children: React.ReactNode
}
type AuthUser = {
    userToken: string
}
type UseContextType = {
    userToken: AuthUser | null,
    setUserToken: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext<UseContextType | null>(null)

export const UserContextProvider: React.FC<UserContextProp> = ({ children }) => {
    const [userToken, setUserToken] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>{children} </UserContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(UserContext)
} 