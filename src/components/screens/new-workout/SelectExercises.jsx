import cn from 'clsx'
import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { Loader } from '../../ui/loader/Loader.jsx'
import useNewListExercises from './useNewListExercises.js'

const selectExercises = ({ control }) => {
	const { data, isLoading } = useNewListExercises()

	if (isLoading) {
		return <Loader />
	}

	return (
		<Controller
			name="exerciseIds"
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix="select2-selection"
					placeholder="Exercises..."
					title="Exercises"
					options={data.map((exercise) => ({
						label: exercise.name,
						value: exercise.id
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	)
}
export default selectExercises
