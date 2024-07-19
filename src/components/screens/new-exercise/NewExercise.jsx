import { useMutation } from '@tanstack/react-query'
import ExerciseServices from '../../../services/exercise/exercise.services.js'
import Layout from '../../layout/Layout.jsx'
import { useForm, Controller } from 'react-hook-form'
import { Loader } from '../../ui/loader/Loader.jsx'
import Field from '../../field/Field.jsx'
import styles from './NewExercise.module.scss'
import Button from '../../ui/button/button.jsx'
import cn from 'clsx'
import { getIconPath } from './icon-path.util.js'
import Alert from '../../ui/alert/Alert.jsx'

export const NewExercise = () => {
	const { isSuccess, error, mutate } = useMutation({
		mutationKey: ['createExercise'],
		mutationFn: (body) => {
			ExerciseServices.create(body)
		},
		onSuccess: () => {
			reset()
		}
	})

	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = (data) => {
		mutate(data)
	}

	const data = ['chest', 'sholders', 'biceps', 'legs', 'hit', 'back']

	return (
		<>
			<Layout
				bgImage="/images/8.jpg"
				heading="Create new Exercise"
				backLink="/new-workout"
			/>
			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				{error && <Alert type="error" text={error} />}
				{isSuccess && <Alert text="Exercise created" />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={register}
						options={{ required: 'Название обязательно' }}
						placeholder="Enter Name"
					/>
					<Field
						error={errors?.times?.message}
						name="times"
						register={register}
						options={{
							required: 'Число повторений обязательно',
							valueAsNumber: true,
							validate: (value) => value > 0 || 'Times must be number'
						}}
						placeholder="Enter Times"
					/>

					<Controller
						name="iconPath"
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map((name) => (
									<img
										key={`ex img ${name}`}
										src={getIconPath(name)}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height="45"
									/>
								))}
							</div>
						)}
					/>
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
