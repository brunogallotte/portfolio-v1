import { useState } from 'react'
import styles from './MenuToggleMobile.module.css'

interface MenuToggleMobileprops {
    toggleMenuIsOpen: (state: boolean) => void
}

export function MenuToggleMobile({ toggleMenuIsOpen }: MenuToggleMobileprops) {
    const [isChecked, setIsChecked] = useState(false)

    const onCheckboxChange = () => {
        setIsChecked((prevChecked) => {
            const newChecked = !prevChecked;
            toggleMenuIsOpen(newChecked);
            return newChecked;
        })
    }

    return(
        <>
            <label htmlFor="menu-icon" className={styles.menuIcon}>
                <input id="menu-icon" type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}