import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import WorkoutLogServices from '../../../../services/workout/workout-log.services.js'
import styles from './Workout.module.scss'
import stylesLayout from '../../../layout/layout.module.scss'
import cn from 'clsx'
import Header from '../../../layout/header/Header.jsx'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => {
			return WorkoutLogServices.getById(id)
		},
		select: ({ data }) => data
	})
	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/8.jpg')`,
					height: 356
				}}
			>
				<Header backLink="/workouts" />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
			</div>
		</>
	)
}
export default Workout
