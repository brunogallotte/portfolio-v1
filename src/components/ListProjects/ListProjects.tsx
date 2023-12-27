import { Card, CardProps } from "../Card/Card"

import todoImg from '../../assets/todo.png'
import twitterImg from '../../assets/twitterproject.png'
import efoodImg from '../../assets/efood.png'

import styles from './ListProjects.module.css'
import { ArrowDownRightSquare } from "lucide-react"

const dataProjects: CardProps[] = [
    {
        imgUrl: todoImg,
        datePublished: "18/12/2023",
        title: "To-do-challenge",
        description: "Este é o primeiro desafio proposto pelo bootcamp de especialização em React.js do Ignite atualizado: uma to-do-list. É relativamente simples, mas o suficiente para praticar os principais fundamentos da biblioteca. O desafio cobre somente o layout desktop!",
        linkVercel: "https://to-do-list-challenge-ignite.vercel.app/",
        linkGitHub: "https://github.com/brunogallotte/to-do-list-challenge"
    },
    {
        imgUrl: twitterImg,
        datePublished: "18/12/2023",
        title: "Twitter App",
        description: "O desafio consistia em desenvolver uma API RESTful e integrar com uma interface front-end. Para construção da API optei pelo Django Rest Framework, e no front-end segui com React.js aliado ao Typescript.",
        linkVercel: "https://twitter-ivory-one.vercel.app/",
        linkGitHub: "https://github.com/brunogallotte/twitter"
    },
    {
        imgUrl: efoodImg,
        datePublished: "21/09/2023",
        title: "E-Food",
        description: "Projeto de E-Commerce desenvolvido com React.js, Typescript, Redux.js e Styled Components. Consumo de API utilizando Redux Tool Kit Query. Apresentado como conclusão do front-end da EBAC.",
        linkVercel: "https://e-food-two.vercel.app/",
        linkGitHub: "https://github.com/brunogallotte/e-food?tab=readme-ov-file"
    }
]

export function ListProjects() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <strong className={styles.title}><ArrowDownRightSquare size={32} />Projects</strong>
                <div className={styles.content}>
                    {dataProjects.map(project => {
                    return <Card 
                        imgUrl={project.imgUrl} 
                        datePublished={project.datePublished} 
                        title={project.title} 
                        description={project.description} 
                        linkVercel={project.linkVercel} 
                        linkGitHub={project.linkGitHub} 
                    />
                    })}
                </div>
            </div>
        </div>
    )
}