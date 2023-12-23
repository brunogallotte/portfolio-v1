import { MoveDown } from "lucide-react";

import styles from '../TitleBox/Title.module.css'

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return(
        <div className={styles.textBox}>
            <MoveDown size={24}/>
            <strong>{text}</strong>
        </div>
    )
}