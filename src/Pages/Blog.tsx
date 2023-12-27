import { Header } from "../components/Header/Header"
import { ListPosts } from "../components/ListPosts/ListPosts"

import { motion } from 'framer-motion'

export function Blog() {
    return(
        <>
            <Header />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", type: "tween" }}
            >
                
                <ListPosts />
            </motion.div>
        </>       
    )
}