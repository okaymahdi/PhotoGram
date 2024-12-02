import { auth } from '@/Firebase/FirebaseConfig'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth'
import React, { ReactNode, useEffect, useState } from 'react'
import { AuthContext, AuthContextProps } from './AuthContext'

// Define Props for the AuthProvider Component
interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const GoogleProvider = new GoogleAuthProvider()

  const CreateUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const LogoutUser = (): Promise<void> => {
    return signOut(auth)
  }

  const GoogleLogin = (): Promise<UserCredential> => {
    return signInWithPopup(auth, GoogleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  // Export all methods
  const authInfo: AuthContextProps = {
    user,
    loading,
    CreateUser,
    LoginUser,
    LogoutUser,
    GoogleLogin,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
