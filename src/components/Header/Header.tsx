import { MessageSquareShare } from 'lucide-react'

import styles from './Header.module.css'
import { ItemLink } from './components/ItemLink'
import { MenuToggleMobile } from '../MenuToggleMobile/MenuToggleMobile'
import { SidebarMobile } from '../SidebarMobile/SidebarMobile'
import { useState } from 'react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenuIsOpen(state: boolean) {
        setIsMenuOpen(state)
    }

    return(
        <>
            <header className={styles.headerBar}>
                <MenuToggleMobile toggleMenuIsOpen={toggleMenuIsOpen} />
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
            {isMenuOpen ? <SidebarMobile /> : null}
        </>
    )
}