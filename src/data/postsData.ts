import { PostProps } from "../components/Post/Post";
import reactImg from '../assets/posts/react.jpeg'
import cleanImg from '../assets/posts/clean.jpeg'

export const posts: PostProps[] = [
    {
        id: 1,
        publishedAt: '22 de dezembro',
        title: 'React e performance: o uso da key no map!',
        content: "Esse é um ponto que pode impactar diretamente na performance do seu projeto, dependendo do tamanho que ele tenha. E eu acho imporatante entender o motivo de se passar uma key, e as consequências de não passar. No início eu passava a key mas não sabia exatamente o porquê disso, só sabia que eu precisava passar alguma informação como key que fosse única, mas ainda não havia parado pra refletir sobre, e entender o motivo mais a fundo. A questão é que o React usa essa propriedade para realizar uma comparação entre os componentes que já estavam em tela e os possíveis novos componentes da iteração. Já deu pra ter uma boa noção né? Pois é, e esse também é o motivo pelo qual a key precisa ser única. Mas disso podem surgir algumas indagações, tais como: E por que não podemos usar o índice do array, ja que este é único?. Porque, por exemplo, você pode modificar os seus dados de posição dentro de um array, mas o índice do array continuará sendo o mesmo. E como consequência o React irá renderizar tudo do zero novamente, pois irá inferir erroneamente que os elementos foram movidos quando, na verdade, apenas a ordem no array foi alterada. Para que essa funcionalidade tenha uma boa performance, é de fato necessário que a key seja única, e não aleatória, de forma que permita a identificação do componente. Se as chaves fossem aleatórias, o React teria que comparar todas as chaves em vez de simplesmente verificar se uma chave específica está presente.",
        tag: 'React.js',
        timeToRead: '4 min',
        postImg: reactImg,
        link: 'https://www.linkedin.com/posts/brunogallotte_react-dev-frontend-activity-7143970657846939648-wPyd?utm_source=share&utm_medium=member_desktop'
    },
    {
        id: 2,
        publishedAt: '17 de dezembro',
        title: 'Arquitetura limpa: desenvolvimento de software não é um empreendimento matemático',
        content: "Sempre tive o hábito de leitura, na maioria das vezes um pouco mais técnica, e com temas relacionados á ciência. Mais pro início do ano li o 'Estruturas de Dados e Algoritmos com JavaScript', enquanto dava os primeiros passos no desenvolvimento web. Gostava de comparar o conteúdo do livro com o do curso, e de observar como é possível ter o mesmo resultado de diferentes formas. Atualmente estou querendo mergulhar mais em leituras de livros que são referência em tecnologia. E levando em conta que ultimamente ando pesquisando sobre boas práticas em geral, optei pelo Arquitetura Limpa do autor Robert Martin. Cheguei em um terço do livro e já deu pra perceber a importância de se ter uma boa arquitetura no projeto. Os prejuízos advindos de um mal planejamento podem ser catastróficos, o autor enfatiza isso logo nas primeiras páginas. Tive o primeiro contato com os princípios SOLID, testabilidade, independência do banco de dados, dentre outros pontos abordados pelo autor. Mas logo no início, mais especificamente na página 31, o autor traz uma perspectiva do desenvolvimento de software que, particularmente, eu achei muito interessante, por me lembrar um pouco dos testes laboratoriais. Ele afirma que, o desenvolvimento de software não é um empreendimento matemático. E pode ser que você se pergunte, como assim 🤔 ? A resposta que embasa essa afirmação é pautada no fato de que demonstramos a exatidão quando falhamos em comprovar a inexatidão. O software é como uma ciência orientada para a refutabilidade. 'Os testes mostram a presença, não a ausência, de bugs.' Ou seja, segundo o autor, estes evidenciam a existência de falhas, não sua ausência. Em outras palavras, enquanto um teste pode apontar a incorreção de um programa, não é possível garantir, por meio de um teste, que um programa está completamente correto.  E evidencia que, após todos os esforços empregados, os testes apenas nos proporcionam a confiança de que um programa é suficientemente correto para atender aos nossos objetivos. E aí, você desenvolvedor que já leu esse livro, o que achou? Conte-me a sua experiência 😁!",
        tag: 'Clean Architeture',
        timeToRead: '4 min',
        postImg: cleanImg,
        link: 'https://www.linkedin.com/posts/brunogallotte_dev-cleancode-arquiteturalimpa-activity-7141167703649677312-7EX4?utm_source=share&utm_medium=member_desktop'
    }
]