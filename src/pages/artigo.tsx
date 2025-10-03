import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ArtigoPage = () => {
    return (
        <Layout>
            <Head>
                <title>A Caixa de Ferramentas de André Neves - Ateliê de Histórias</title>
            </Head>
            <article className="full-article">
                <span className="post-category">Decifrando a Arte</span>
                <h1>A Caixa de Ferramentas de André Neves</h1>

                <Image src="/img/ilust.png" alt="Ilustração de André Neves" className="article-main-image" width={800} height={300} style={{ objectFit: 'cover' }}/>

                <h2>A Mágica da Colagem</h2>
                <p>A técnica mais marcante de André Neves é, sem dúvida, a colagem. Ele não se limita a papéis coloridos; as suas obras são um mosaico de texturas. Pedaços de tecido, rendas, botões, folhas secas e até pedaços de madeira são costurados e sobrepostos para criar personagens e cenários que parecem saltar da página. Essa escolha não é meramente estética: a textura de uma roupa pode indicar a personalidade do personagem, e um fundo com papel áspero pode transmitir a aridez de um cenário.</p>

                <blockquote>
                    "Cada material escolhido carrega consigo uma memória, uma história. A colagem permite que essas pequenas histórias se unam para contar uma maior."
                </blockquote>

                <h2>Cores que Falam</h2>
                <p>A paleta de cores de André Neves é uma personagem à parte. Ele frequentemente utiliza tons quentes e terrosos — como ocre, marrom e vermelho — que remetem à cultura popular e ao imaginário do Nordeste brasileiro. No entanto, ele sabe como quebrar essa paleta com pontos de cores vibrantes, como o azul-turquesa ou o amarelo-vivo, para guiar o olho do leitor e destacar elementos importantes da narrativa. Em livros como "Ninho de Cores", a própria cor se torna o fio condutor da história.</p>

                <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>

            </article>
        </Layout>
    );
};

export default ArtigoPage;