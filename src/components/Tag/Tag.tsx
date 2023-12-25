import styles from './Tag.module.css'

interface TagProps {
    text: string
}

export function Tag({ text }: TagProps){
    return(
        <span className={styles.tag}>{text}</span>
    )
}