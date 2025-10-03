import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const MensagensPage = () => {
    return (
        <Layout>
            <Head>
                <title>O Poder das Metáforas - Ateliê de Histórias</title>
            </Head>
            <article className="full-article">
                <span className="post-category">Mergulho nas Histórias</span>
                <h1>O Poder das Metáforas: Desvendando "A Caixa"</h1>

                <Image src="/img/caixa-jessica.png" alt="Capa do livro A Caixa de Jéssica" className="article-main-image" width={800} height={500} style={{ objectFit: 'contain' }}/>

                <h2>Mais que um Objeto, um Universo Interior</h2>
                <p>Em muitas obras de André Neves, objetos do cotidiano ganham vida e se tornam símbolos poderosos. Talvez nenhum seja tão emblemático quanto a caixa no livro "A Caixa de Jéssica". À primeira vista, é apenas uma caixa de sapatos. Mas nas mãos de Jéssica — e na sensibilidade de André Neves — ela se transforma em uma metáfora para o nosso mundo interior.</p>
                <p>A caixa representa aquilo que guardamos e que só nós entendemos o valor: nossos segredos, nossos medos, nossas maiores alegrias e, principalmente, nossa imaginação. É o espaço sagrado onde nossa identidade é construída, longe dos olhos e julgamentos do mundo exterior.</p>

                <blockquote>
                    "Os objetos contam-nos histórias silenciosas. Uma simples caixa pode ser o cofre da imaginação, o palco de uma grande amizade ou o esconderijo de um medo."
                </blockquote>

                <h2>A Caixa em Nossas Vidas</h2>
                <p>A genialidade de André Neves está em nos fazer refletir: qual é a "caixa" que carregamos? O que guardamos dentro dela que nos torna únicos? A história de Jéssica e seu amigo ensina-nos que compartilhar o que há na nossa "caixa" é um ato de coragem e um dos maiores presentes que podemos dar a alguém. A amizade verdadeira nasce quando permitimos que outra pessoa olhe para dentro do nosso universo particular e, em vez de estranhar, se encante com o que vê.</p>
                <p>Portanto, "A Caixa de Jéssica" é muito mais que uma história infantil; é um convite para valorizarmos nossa própria singularidade e a coragem de a compartilhar com o mundo.</p>

                <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>

            </article>
        </Layout>
    );
};

export default MensagensPage;