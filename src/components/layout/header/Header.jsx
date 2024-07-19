import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import { GoArrowLeft } from 'react-icons/go'
import Hamburger from '../humburger/Hambyrger.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import { SlUser } from 'react-icons/sl'

const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button onClick={() => navigate('/profile')}>
							<BsPerson color="white" fontSize={30} />
						</button>
					) : (
						<button onClick={() => navigate(isAuth ? backLink : '/auth')}>
							<GoArrowLeft color="white" />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}
export default Header
