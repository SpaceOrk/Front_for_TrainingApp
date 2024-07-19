import { useAuth } from './useAuth.js'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Cookies from 'js-cookie'

import { TOKEN } from '../app.constants.js'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}
