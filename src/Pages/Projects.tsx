import { Header } from "../components/Header/Header";
import { ListProjects } from "../components/ListProjects/ListProjects";

import { AnimatePresence, motion } from 'framer-motion'

export function Projects() {
    return(
        <AnimatePresence mode="wait">
            <Header />
            <motion.div 
                initial={{  opacity: 0 }}
                animate={{  opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -200, transition: { duration: 0.5 } }}
                key="projects"
            >
                <ListProjects />  
            </motion.div>
        </AnimatePresence>
    )
}