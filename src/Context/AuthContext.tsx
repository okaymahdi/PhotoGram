import { User, UserCredential } from 'firebase/auth'
import { createContext } from 'react'

// Define the context's shape
export interface AuthContextProps {
  user: User | null
  loading: boolean
  CreateUser: (email: string, password: string) => Promise<UserCredential>
  LoginUser: (email: string, password: string) => Promise<UserCredential>
  LogoutUser: () => Promise<void>
  GoogleLogin: () => Promise<UserCredential>
}

// Create and export the context
export const AuthContext = createContext<AuthContextProps | null>(null)
