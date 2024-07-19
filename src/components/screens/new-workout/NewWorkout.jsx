import { useMutation } from '@tanstack/react-query'
import Layout from '../../layout/Layout.jsx'
import { useForm, Controller } from 'react-hook-form'
import { Loader } from '../../ui/loader/Loader.jsx'
import Field from '../../field/Field.jsx'
import Button from '../../ui/button/button.jsx'
import cn from 'clsx'
import Alert from '../../ui/alert/Alert.jsx'
import useNewWorkout from './useNewWorkout.js'
import { Link } from 'react-router-dom'
import SelectExercises from './SelectExercises.jsx'

export const NewWorkout = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<>
			<Layout bgImage="/images/8.jpg" heading="Create new Workout" />
			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Workout created successfully." />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={register}
						options={{ required: 'Название обязательно' }}
						placeholder="Enter Name"
					/>
					<Link to="/new-exercise" className="dark-link">
						Add new Exercise
					</Link>

					<SelectExercises control={control} />
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}
