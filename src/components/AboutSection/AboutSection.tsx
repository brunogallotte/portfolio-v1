import brunoImg from '../../assets/eu.jpeg'

import styles from './AboutSection.module.css'
import { ArrowDownRightSquare } from 'lucide-react'

export function AboutSection() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.boxtext}>
                    <strong><ArrowDownRightSquare size={32} />Sobre mim</strong>
                    <p>No momento, acabo de terminar o curso de Desenvolvimento Full Stack Python pela Escola Britânica de Artes Criativas & Tecnologia. Durante a jornada, a chama que havia no meu eu de 6 anos de idade se reascendeu, principalmente em relação a criação de interfaces. <br /> <br />

                        Estou me aprofundando no Desenvolvimento Front-end, e a cada dia busco me aperfeiçoar mais nessa área. Atualmente estou participando do bootcamp de especialização Igntite, da RocketSeat, focando na trilha de React.js. <br /> <br />

                        Considero-me um profissional com perfil voltado para resolução de problemas e pensamento analítico. Tenho a capacidade de automotivação, a jornada pela excelência é minha constante prioridade; mantendo a calma e prosperando a constância, enquanto recompenso o processo.
                    </p>
                </div>
                <img src={brunoImg} />
            </div>
        </div>
    )
}