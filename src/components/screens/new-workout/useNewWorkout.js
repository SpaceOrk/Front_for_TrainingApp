import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import WorkoutServices from '../../../services/workout/workout.services.js'
import { useMemo } from 'react'

const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, mutate } = useMutation({
		mutationKey: ['createWorkout'],
		mutationFn: (body) => {
			return WorkoutServices.create(body) // Обратите внимание на добавленное ключевое слово return
		},
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	const onSubmit = (data) => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map((ex) => ex.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}),
		[errors, isSuccess, error, isLoading]
	)
}

export default useNewWorkout
