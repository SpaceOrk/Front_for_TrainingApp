import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'

import styles from './Hamburger.module.scss'
import Menu from './Menu.jsx'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<>
			<div className={styles.wrapper} ref={ref}>
				<button onClick={() => setIsShow(!isShow)}>
					{isShow ? <IoCloseOutline color="white" /> : <RxHamburgerMenu />}
				</button>
				<Menu isShow={isShow} setIsShow={setIsShow} />
			</div>
		</>
	)
}
export default Hamburger
