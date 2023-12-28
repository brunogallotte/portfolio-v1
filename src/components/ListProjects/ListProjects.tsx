import { projects } from "../../data/projectsData"
import { Card } from "../Card/Card"

import styles from './ListProjects.module.css'
import { ArrowDownRightSquare } from "lucide-react"

export function ListProjects() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <strong className={styles.title}><ArrowDownRightSquare size={32} />Projects</strong>
                <div className={styles.content}>
                    {projects.map(project => {
                    return <Card 
                        imgUrl={project.imgUrl} 
                        datePublished={project.datePublished} 
                        title={project.title} 
                        description={project.description} 
                        linkVercel={project.linkVercel} 
                        linkGitHub={project.linkGitHub}
                        linkLinkedin={project.linkLinkedin} 
                    />
                    })}
                </div>
            </div>
        </div>
    )
}