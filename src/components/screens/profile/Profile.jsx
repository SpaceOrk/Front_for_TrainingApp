import Layout from '../../layout/Layout.jsx'
import { useProfile } from './useProfile.js'
import stylesLayout from '../../layout/layout.module.scss'
import styles from './Profile.module.scss'
import cn from 'clsx'
import Header from '../../layout/header/Header.jsx'
import { Loader } from '../../ui/loader/Loader.jsx'
import Statistics from '../../ui/statistics/Statistics.jsx'

export const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url('/images/4.png')`, height: 356 }}
			>
				<Header />
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<h1 className={stylesLayout.heading}>{data?.email}</h1>
					)}
				</div>
			</div>
			<Statistics />

			<div
				className="wrapper-inner-page"
				style={{
					paddingLeft: 0,
					paddingRight: 0,
					width: '330px',
					display: 'flex',
					gap: '40px'
				}}
			>
				<div className={styles.before_after}>
					<div className={styles.heading}>Before</div>
					<img src="/images/6.jpg" alt="" />
				</div>
				<div className={styles.before_after}>
					<div className={styles.heading}>After</div>
					<img src="/images/5.jpg" alt="" />
				</div>
			</div>
		</>
	)
}
