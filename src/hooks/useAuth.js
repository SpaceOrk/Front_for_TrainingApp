import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider.jsx'

export const useAuth = () => useContext(AuthContext)
