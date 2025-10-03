import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const CuriosidadesPage = () => {
    return (
        <Layout>
            <Head>
                <title>Curiosidades - Ateliê de Histórias</title>
            </Head>
            <article className="full-article">
                <span className="post-category">Você Sabia?</span>
                <h1>Pequenos Segredos do Ateliê</h1>

                <Image src="/img/ilustracao-andre.jpg" alt="Ilustração de André Neves" className="article-main-image" width={800} height={300} style={{ objectFit: 'cover' }} />

                <h2>Onde nascem os nomes?</h2>
                <p>Muitos nomes de personagens, como 'Tom' ou 'Sebastião', são escolhidos por sua simplicidade e força, refletindo a essência da criança. André Neves busca nomes que soem como um chamado, quase um apelido carinhoso que um avô daria a seu neto, criando uma conexão imediata e afetuosa com o leitor.</p>

                <h2>A Trilha Sonora do Artista</h2>
                <p>Enquanto cria, André Neves quase sempre está a ouvir música. Ele conta que as canções ajudam a dar o "tom" emocional da ilustração. Para cenas mais introspectivas, ele pode ouvir músicas clássicas ou instrumentais. Para momentos de alegria e festa, a música popular brasileira, especialmente a nordestina, embala seus traços e recortes.</p>

                <h2>O Medo de errar</h2>
                <p>Ao contrário do que muitos pensam, a colagem não permite muitos erros. Uma vez que um papel raro ou um tecido específico é cortado e colado, é quase impossível voltar atrás. Ele diz que cada corte é um ato de coragem, e que o "medo de errar" o mantém focado e presente em cada etapa do processo criativo.</p>

                <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>

            </article>
        </Layout>
    );
};

export default CuriosidadesPage;