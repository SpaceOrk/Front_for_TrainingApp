import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutServices from '../../../../../services/workout/workout.services.js'
import WorkoutLogServices from '../../../../../services/workout/workout-log.services.js'
import { useNavigate } from 'react-router-dom'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutServices.getAll(),
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation({
		mutationKey: ['Create new workout log'],
		mutationFn: (workoutId) => WorkoutLogServices.create(workoutId),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.id}`)
		}
	})

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
