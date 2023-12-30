import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Briefcase, Code2, Microscope, RocketIcon } from 'lucide-react';

export function VerticalTimeLine() {
    return(
        <div className="container">
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'var(--zinc-900)', color: 'var(--zinc-200)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--violet-600)' }}
                date="2023 - present"
                iconStyle={{ background: 'var(--violet-950)', color: '#fff' }}
                icon={<RocketIcon />}
            >
                <h3 className="vertical-timeline-element-title">Especialista React Js</h3>
                <h4 className="vertical-timeline-element-subtitle">RocketSeat Ignite</h4>
                <p>
                Bootcamp de especialização iniciado em 5 de dezembro de 2023, com a finalidade de aprofundar os conhecimentos em desenvolvimento front-end, principalmente com React.js
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - present"
                iconStyle={{ background: 'var(--violet-950)', color: '#fff' }}
                contentStyle={{ background: 'var(--zinc-900)', color: 'var(--zinc-200)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--violet-600)' }}
                icon={<Briefcase />}
            >
                <h3 className="vertical-timeline-element-title">Freelancer</h3>
                <h4 className="vertical-timeline-element-subtitle">Desenvolvedor Front-end</h4>
                <p>
                Encarregado de repensar e aprimorar a elaboração de portfólio web para empresa internacional de fotografia publicitária, entendendo as necessidades do cliente e traduzindo em soluções personalizadas, responsivas e completamente funcionais, alinhando-se de maneira precisa com as expectativas do cliente 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="abr 2023 - dez 2023"
                iconStyle={{ background: 'var(--violet-950)', color: '#fff' }}
                contentStyle={{ background: 'var(--zinc-900)', color: 'var(--zinc-200)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--violet-600)' }}
                icon={<Code2 />}
            >
                <h3 className="vertical-timeline-element-title">Desenvolvedor Full Stack Python</h3>
                <h4 className="vertical-timeline-element-subtitle">Escola Britânica de Artes Criativas e Tecnologia</h4>
                <p>
                Curso profissionalizante, iniciado em abril de 2023 e concluído com maestria em dezembro do mesmo ano. Contato com diversas tecnologias como: SASS, Styled-Components, Gulp, Bootstrap, Typescript, React Testing Library, Vue.js, React.js, Redux.js. <br /><br /> Classificado entre uma das pessoas mais produtivas da EBAC, fiquei entre o top 0.05% no ranking de melhores alunos em 2023<br /><br /> No back-end tive a oportunidade de aprender a construir uma API utilizando Django Rest Framework e a utilizar o banco de dados PostGreSQL, construindo sozinho um projeto fullstack de rede social do zero.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'var(--violet-950)', color: '#fff' }}
                contentStyle={{ background: 'var(--zinc-900)', color: 'var(--zinc-200)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--violet-600)' }}
                icon={<Microscope />}
            >
                <h3 className="vertical-timeline-element-title">Bacharel em Ciências Biológicas</h3>
                <h4 className="vertical-timeline-element-subtitle">Unifeso</h4>
                <p>
                Fui pesquisador em neurociências, iniciei no curso de Ciências Biológicas em 2017 e conclui em 2020, participei como bolsista do (Programa de Iniciação Científica e Pesquisa) e contribui para o projeto de divulgação científica "Revista Simplesmente", voltado para Psicologia, Neurociência e Filosofia.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
        </VerticalTimeline>
        </div>
    )
}