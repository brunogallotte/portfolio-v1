import reactIcon from '../../assets/skills/react.png'
import typeIcon from '../../assets/skills/typescript.svg'
import nextIcon from '../../assets/skills/next.svg'

import styles from './Skills.module.css'
import { Separator } from './components/Separator'
import { Title } from '../TitleBox/Title'

export function Skills() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
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
            </div>
        </div>
    )
        
}