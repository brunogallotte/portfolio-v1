import { AboutSection } from "../components/AboutSection/AboutSection";
import { Header } from "../components/Header/Header";
import { VerticalTimeLine } from "../components/VerticalTimeLine/VerticalTimeLine";

import { motion } from 'framer-motion'

export function About() {
    return(
        <>
            <Header />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", type: "tween" }}
            >
                <AboutSection />
                <VerticalTimeLine />
            </motion.div>
        </>
    )
}