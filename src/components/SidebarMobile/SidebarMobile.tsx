import { Link } from "react-router-dom";

import styles from './SidebarMobile.module.css'
import { AnimatePresence, motion } from "framer-motion";

export function SidebarMobile() {
    return(
        <AnimatePresence>
            <motion.aside className={styles.wrapper} initial={{ height: "0vh" }} animate={{ height: "100vh" }} transition={{ duration: 0.5 }}> 
                <motion.nav 
                    className={styles.menu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Link to="/">
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
                            Início
                        </motion.div>
                    </Link>
                    <Link to="/projects">
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
                            Projetos
                        </motion.div>
                    </Link>
                    <Link to="/about">
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
                            Sobre
                        </motion.div>
                    </Link>
                    <Link to="/blog">
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
                            Blog
                        </motion.div>
                    </Link>
                </motion.nav>
            </motion.aside>
        </AnimatePresence>
    )
}