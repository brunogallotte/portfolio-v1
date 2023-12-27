import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Skills } from "../components/Skills/Skills";

import { AnimatePresence, motion } from 'framer-motion'

export function Home() {
    return(
        <AnimatePresence mode="wait">
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -200, transition: { duration: 0.5 } }}
                key="home"
            >
                <Hero />
                <Skills />
            </motion.div>
        </AnimatePresence>     
    )
}