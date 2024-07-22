import { useMutation, useQueryClient } from '@tanstack/react-query'
import ExerciseLogServices from '../../../../services/exercise/exercise-log.services.js'
import { useNavigate, useParams } from 'react-router-dom'

export const useCompleteLogTime = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation({
		mutationKey: ['complete log'],
		mutationFn: (id, body) => ExerciseLogServices.complete(id, body),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.workoutLogId}`)
		}
	})
	return {
		completeLog: mutate,
		errorCompleted
	}
}
