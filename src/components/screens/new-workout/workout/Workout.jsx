import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import WorkoutLogServices from '../../../../services/workout/workout-log.services.js'
import styles from './Workout.module.scss'
import stylesLayout from '../../../layout/layout.module.scss'
import cn from 'clsx'
import Header from '../../../layout/header/Header.jsx'
import { HeaderWorkout } from './detail/HeaderWorkout.jsx'
import { Loader } from '../../../ui/loader/Loader.jsx'
import { ExerciseItem } from './detail/ExerciseItem.jsx'
import { Fragment } from 'react'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => WorkoutLogServices.getById(id),
		select: ({ data }) => data
	})
	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
						<Fragment key={exerciseLog.id}>
							<ExerciseItem exerciseLog={exerciseLog} />
							{index % 2 !== 0 &&
								index !== workoutLog.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
						</Fragment>
					))}
				</div>
			)}
		</>
	)
}
export default Workout
