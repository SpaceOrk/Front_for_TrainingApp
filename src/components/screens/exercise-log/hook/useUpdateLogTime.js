import { useMutation, useQueryClient } from '@tanstack/react-query'
import ExerciseLogServices from '../../../../services/exercise/exercise-log.services.js'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const useUpdateLogTime = () => {
	const { id } = useParams()
	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation({
		mutationKey: ['updateLogTime'],
		mutationFn: ({ timeId, body }) =>
			ExerciseLogServices.updateExerciseTime(timeId, body),
		onSuccess: () => {
			queryClient.invalidateQueries(['get exercise log'], id)
		}
	})
	return {
		updateTime: mutate,
		errorChange
	}
}
