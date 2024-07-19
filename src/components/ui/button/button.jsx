import styles from './Button.module.scss'

import cn from 'clsx'

export default function Button({ children, ckickHandler = null, size = 'xl' }) {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={ckickHandler}
			>
				{children}
			</button>
		</div>
	)
}
