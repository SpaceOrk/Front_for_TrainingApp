import Layout from '../../layout/Layout.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/button.jsx'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import Statistics from '../../ui/statistics/Statistics.jsx'

export default function Home() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<>
			<Layout bgImage="/images/1.jpg">
				<Button
					ckickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
				>
					{isAuth ? 'New' : 'Sign in'}
				</Button>
				<h1 className={styles.heading}>Forward to the dream</h1>
				<Statistics />
			</Layout>
		</>
	)
}
