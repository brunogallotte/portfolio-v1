import { MessageSquareShare } from 'lucide-react'
import styles from './Header.module.css'

export function Header() {
    return(
        <header className={styles.headerBar}>
            <div className={`container ${styles.content}`}>
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
                <button><MessageSquareShare size={16}/>blog</button>
            </div>
        </header>
    )
}