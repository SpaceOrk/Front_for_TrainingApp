import Alert from '../../ui/alert/Alert'

import styles from './Exercise-Log.module.scss'
import { Loader } from '../../ui/loader/Loader.jsx'
import { useExerciseLog } from './hook/useExerciseLog.js'
import HeaderExerciseLog from './HeaderExerciseLog.jsx'
import TableHeader from './table/TableHeader.jsx'
import TableRow from './table/TableRow.jsx'
import { useUpdateLogTime } from './hook/useUpdateLogTime.js'
import { useCompleteLogTime } from './hook/useCompleteLogTime.js'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	} = useExerciseLog()

	const { completeLog, errorCompleted } = useCompleteLogTime()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type="warning" text="Times not found" />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
