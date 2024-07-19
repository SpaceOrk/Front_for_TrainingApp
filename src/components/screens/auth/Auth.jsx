import Layout from '../../layout/Layout.jsx'
import Button from '../../ui/button/button.jsx'
import Field from '../../field/Field.jsx'
import { Loader } from '../../ui/loader/Loader.jsx'
import styles from './Auth.module.scss'

import { useAuthPage } from './useAuthPage.js'

export const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()

	return (
		<>
			<Layout heading="Sign in" bgImage="/images/3.jpg" />
			<div className="wrapper-inner-page">
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						type="text"
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{ required: 'Почта обязательна' }}
						placeholder="Enter Email"
					/>
					<Field
						type="password"
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{ required: 'Пароль обязателен' }}
						placeholder="Enter Password"
					/>
					<div className={styles.wrapperButtons}>
						<Button ckickHandler={() => setType('login')}>Sign in</Button>
						<Button ckickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
