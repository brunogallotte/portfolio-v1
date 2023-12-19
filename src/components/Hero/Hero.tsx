import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Hero.module.css'

export function Hero() {
    return(
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1>Hi, I'm Bruno Gallotte<span>.</span></h1>
                    <strong>I'm a <span>Front End Developer</span></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam illum ratione suscipit ipsa, deleniti accusamus voluptatem similique at numquam ducimus obcaecati rem maxime repellat eligendi dolorem. Blanditiis non possimus incidunt.</p>
                    <div className={styles.socialBox}>
                        <Linkedin />
                        <Github />
                        <Mail />
                    </div>
                    <button>Contact-me</button>
                    <div className={styles.blur}/>
                </div>
            </div>
        </div>
    )
}