import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/home/Home.jsx'
import './assets/styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './routes/Routes.jsx'
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
