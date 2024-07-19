import { useQuery } from '@tanstack/react-query'
import ExerciseServices from '../../../services/exercise/exercise.services.js'

const newListExercises = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['listExercise'],
		queryFn: () => ExerciseServices.getAll(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}

export default newListExercises
