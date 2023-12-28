import styles from './Post.module.css'

import { Tag } from '../Tag/Tag'
import { ArrowUpRight } from 'lucide-react'

export interface PostProps {
    id?: number
    publishedAt: string
    title: string
    content: string 
    tag: string
    timeToRead: string
    postImg: string
    link: string
}

export function Post( {publishedAt, title, content, tag, timeToRead, postImg, link}: PostProps ) {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img src={postImg} className={styles.mobileImage}/>
                    <time>{publishedAt}</time>
                    <strong>{title}</strong>
                    <p>{content}</p>
                    <footer className={styles.footer}>
                        <div className={styles.infoBox}>
                            <Tag text={tag} />
                            <time className={styles.timeToRead}>{timeToRead}</time>
                        </div>
                        <a href={link} target="_blank" className={styles.lerMais}>Ler mais<ArrowUpRight/></a>
                    </footer>
                </div>
                <img src={postImg} className={styles.desktopImage}/>
            </div>
        </div>
    )
}