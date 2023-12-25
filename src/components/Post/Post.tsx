import styles from './Post.module.css'

import { Tag } from '../Tag/Tag'

export interface PostProps {
    id?: number
    publishedAt: string
    title: string
    content: string 
    tag: string
    timeToRead: string
    postImg: string
}

export function Post( {publishedAt, title, content, tag, timeToRead, postImg}: PostProps ) {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <time>{publishedAt}</time>
                    <strong>{title}</strong>
                    <p>{content}</p>
                    <footer className={styles.footer}>
                        <Tag text={tag} />
                        <time>{timeToRead}</time>
                    </footer>
                </div>
                <img src={postImg} />
            </div>
        </div>
    )
}