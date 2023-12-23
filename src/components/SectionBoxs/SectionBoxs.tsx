import styles from './SectionBoxs.module.css'

export function SectionBoxs() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <strong>Blog</strong>
                        <p>Stay up to date with the latest tricks & bet pratices.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <strong>Blog</strong>
                        <p>Stay up to date with the latest tricks & bet pratices.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}