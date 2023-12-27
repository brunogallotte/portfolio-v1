import { AboutSection } from "../components/AboutSection/AboutSection";
import { Header } from "../components/Header/Header";
import { VerticalTimeLine } from "../components/VerticalTimeLine/VerticalTimeLine";

import { motion } from 'framer-motion'

export function About() {
    return(
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            >
                <AboutSection />
                <VerticalTimeLine />
            </motion.div>
        </>
    )
}