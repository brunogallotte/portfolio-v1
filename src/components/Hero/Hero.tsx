import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Hero.module.css'
import { Cube } from '../Cube/Cube'

import { motion } from 'framer-motion'

export function Hero() {
    return(
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.boxContent}>
                    <motion.div 
                        className={styles.content}
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", type: "tween" }}
                    >
                        <h1>Olá, eu me chamo <br/> Bruno Gallotte<span>.</span></h1>
                        <strong>E sou <span>Desenvolvedor Front-End</span></strong>
                        <p>No início estudei para ser full stack, mas me apaixonei por desenvolver telas bonitas nos mínimos detalhes. Minha experiência abrange a criação de aplicações web front-end, integração com backend através de APIs RESTful, utilizando principalmente a biblioteca React.js com Typescript, Styled-Components ou Tailwind CSS, gerenciamento de estados com Redux.js ou Context API. Vamos trabalhar juntos?</p>
                        <div className={styles.socialBox}>
                            <a href="http://www.linkedin.com/in/brunogallotte" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://github.com/brunogallotte" target="_blank">
                                <Github />
                            </a>
                            <a href="mailto:brunogallotte.sci@gmail.com" target="_blank">
                                <Mail />
                            </a>
                        </div>
                        <a href="http://wa.me/21981353620" target="_blank">
                            <button>Contact-me <Mail size={16}/></button>
                        </a>
                        <div className={styles.blur}/>
                    </motion.div>
                    <div className={styles.cube}>
                        <Cube />
                    </div>
                </div>
            </div>
        </section>
    )
}