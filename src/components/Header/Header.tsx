import { MessageSquareShare } from 'lucide-react'

import styles from './Header.module.css'
import { ItemLink } from './components/ItemLink'

export function Header() {
    return(
        <header className={styles.headerBar}>
            <div className={`container ${styles.content}`}>
                <nav className={styles.boxLinks}>
                    <ItemLink link="/" title="Início" />
                    <ItemLink link="/projects" title="Projetos" />  
                    <ItemLink link="/about" title="Sobre" />          
                </nav>
                <button>
                    <MessageSquareShare size={16}/>
                    <ItemLink link="/blog" title="blog" />
                </button>
            </div>
        </header>
    )
}