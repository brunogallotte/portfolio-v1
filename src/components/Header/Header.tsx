import styles from './Header.module.css'

export function Header() {
    return(
        <header className={styles.headerBar}>
            <div className="container">
                <nav>
                    <ul className={styles.boxLinks}>
                        <li>
                            home
                            <div className={styles.tabSelect} />
                        </li>
                        <li>projects</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}