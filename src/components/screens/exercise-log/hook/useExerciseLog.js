import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogServices from '../../../../services/exercise/exercise-log.services.js'
import { useState } from 'react'
import { useUpdateLogTime } from './useUpdateLogTime.js'

export const useExerciseLog = () => {
	const { id } = useParams()
	const [times, setTimes] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogServices.getById(id),
		select: ({ data }) => data,
		onSuccess(data) {
			if (data?.times?.length) setTimes(data.times)
		}
	})
	const { errorChange, updateTime } = useUpdateLogTime()

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map((time) => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = (timeId) => {
		return times.find((time) => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	}
}
