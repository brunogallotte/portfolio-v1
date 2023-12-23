import styles from './Card.module.css'

import { ArrowUpRight, Github, Link } from 'lucide-react'

export interface CardProps {
    imgUrl: string
    datePublished: string
    title: string
    description: string
    linkVercel: string
    linkGitHub?: string
}

export function Card({ imgUrl, datePublished, title, description, linkVercel, linkGitHub }: CardProps) {
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
                    <button>Saber mais<ArrowUpRight size={16}/></button>
                    <div className={styles.links}>
                        <Link href={linkVercel}/>
                        <Github href={linkGitHub}/>
                    </div>
                </footer>
           </div>
        </div>
    )
}