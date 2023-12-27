import reactIcon from '../../assets/skills/react.png'
import typeIcon from '../../assets/skills/typescript.svg'
import nextIcon from '../../assets/skills/next.svg'

import styles from './Skills.module.css'
import { Separator } from './components/Separator'
import { Title } from '../TitleBox/Title'

import { motion } from 'framer-motion'

export function Skills() {
    return(
        <div className="container">
            <motion.div 
                className={styles.wrapper}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut", type: "tween" }}
            >
                <div className={styles.content}>
                    <Title text="principal skills"/>
                </div>
                <div className={styles.content}>
                    <img src={reactIcon} />
                    <Separator />
                    <img src={typeIcon} />
                    <Separator />
                    <img src={nextIcon} className={styles.nextjs}/>
                </div>
            </motion.div>
        </div>
    )
        
}