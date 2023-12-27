import { Header } from "../components/Header/Header";
import { ListProjects } from "../components/ListProjects/ListProjects";

import { AnimatePresence, motion } from 'framer-motion'

export function Projects() {
    return(
        <AnimatePresence mode="wait">
            <Header />
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", type: "tween" }}
            >
                <ListProjects />  
            </motion.div>
        </AnimatePresence>
    )
}