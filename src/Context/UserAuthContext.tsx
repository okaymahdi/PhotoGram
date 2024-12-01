import { auth } from '@/Firebase/FirebaseConfig'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth'
import { createContext } from 'react'

type AuthContextData = {
  User: User | null
  Register: typeof Register
  Login: typeof Login
  GoogleSignIn: typeof GoogleSignIn
  Logout: typeof Logout
}

// Register with Email and Password
const Register = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Login wiht Email and Password
const Login = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
}

// Google Sign In
const GoogleSignIn = (): Promise<UserCredential> => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

// Logout
const Logout = (): Promise<void> => {
  return signOut(auth)
}

export const UserAuthContext = createContext<AuthContextData>({
  User: null,
  Register,
  Login,
  GoogleSignIn,
  Logout,
})
