import styles from './Card.module.css'

import { ArrowUpRight, Github, Link } from 'lucide-react'

export interface CardProps {
    imgUrl: string
    datePublished: string
    title: string
    description: string
    linkVercel: string
    linkGitHub?: string
    linkLinkedin: string
}

export function Card({ imgUrl, datePublished, title, description, linkVercel, linkGitHub, linkLinkedin }: CardProps) {
    return(
        <div className={styles.wrapper}>
           <img src={imgUrl} />
           <time>
                {datePublished}
            </time>
           <div className={styles.content}>
                <div>
                    <strong>
                        {title}
                    </strong>
                    <p>
                        {description}
                    </p>
                </div>

                <footer className={styles.footer}>
                    <a href={linkLinkedin} target="_blank">
                        <button>Saber mais<ArrowUpRight size={16}/></button>
                    </a>
                    <div className={styles.links}>
                        <a href={linkVercel} target="_blank">
                            <Link />
                        </a>
                        <a href={linkGitHub} target="_blank">
                            <Github />
                        </a>
                    </div>
                </footer>
           </div>
        </div>
    )
}