import Layout from '../../../../layout/Layout.jsx'
import styles from '../Workout.module.scss'
import { Loader } from '../../../../ui/loader/Loader.jsx'
import Alert from '../../../../ui/alert/Alert.jsx'
import WorkoutItem from './WorkoutItem.jsx'
import { useWorkouts } from './useWorkouts.js'

const ListWorkout = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkouts()

	return (
		<>
			<Layout bgImage="/images/8.jpg" heading="Workout list" />

			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type="error" text={error.message} />}
				{isSuccessMutate && <Alert text="Workout log created" />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map((workout) => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type="warning" text="Workouts not found" />
				)}
			</div>
		</>
	)
}
export default ListWorkout
