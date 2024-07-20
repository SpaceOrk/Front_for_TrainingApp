import { $axios } from '../../api.js'
import { EXERCISE } from './exercise.services.js'
import { WORKOUT } from '../workout/workout.services.js'

const LOG = `${EXERCISE}/log`

class ExerciseLogService {
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`)
	}
	async create(exerciseId) {
		return await $axios.post(`${LOG}/${exerciseId}`)
	}
	async updateExerciseTime(timeId, body) {
		return await $axios.put(`${LOG}/${timeId}`, body)
	}
	async complete(id, body) {
		return await $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
