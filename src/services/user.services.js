import { $axios } from '../api.js'
const USERS = '/users'

class UserService {
	async getProfile() {
		return await $axios.get(`${USERS}/profile`)
	}
}

export default new UserService()
