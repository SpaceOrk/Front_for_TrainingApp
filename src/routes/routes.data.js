import { Auth } from '../components/screens/auth/Auth.jsx'
import Home from '../components/screens/home/Home'
import { NewWorkout } from '../components/screens/new-workout/NewWorkout.jsx'
import { Profile } from '../components/screens/profile/Profile.jsx'
import NewExercise from '../components/screens/new-exercise/NewExercise.jsx'
import Workout from '../components/screens/new-workout/workout/Workout.jsx'
import { ListWorkout } from '../components/screens/new-workout/workout/ListWorkout.jsx'
export const routes = [
	{
		path: '/auth',
		component: Auth,
		IsAuth: false
	},
	{
		path: '/',
		component: Home,
		IsAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		IsAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		IsAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		IsAuth: true
	},

	{
		path: '/workout/:id',

		component: Workout,
		IsAuth: true
	},
	{
		path: '/workouts',

		component: ListWorkout,
		IsAuth: true
	}
	/*
	{
		path: '/exercise/:id',

		component: SingleExercise,
		IsAuth: true,
	}, */
]
