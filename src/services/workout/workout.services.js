import { $axios } from '../../api.js'
const WORKOUT = '/workouts'

class WorkoutServices {
	async getAll() {
		return await $axios.get(WORKOUT)
	}
	async getById(id) {
		return await $axios.get(`${WORKOUT}/${id}`)
	}
	async create(body) {
		return await $axios.post(WORKOUT, body)
	}
	async update(id, body) {
		return await $axios.put(`${WORKOUT}/${id}`, body)
	}
	async delete(id) {
		return await $axios.delete(`${WORKOUT}/${id}`)
	}
}

export default new WorkoutServices()
