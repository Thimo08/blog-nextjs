import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { obras } from '@/data/obras';
import { Obra } from '@/types';

interface IParams extends ParsedUrlQuery {
    slug: string;
}

type ObraPageProps = {
    obra: Obra | null;
};

const ObraPage: NextPage<ObraPageProps> = ({ obra }) => {
    if (!obra) {
        return (
            <Layout>
                <div style={{ textAlign: 'center' }}>
                    <h2>Ops! Obra não encontrada.</h2>
                    <p>Parece que o livro que você está a procurar não existe no nosso ateliê.</p>
                    <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>Obra: {obra.titulo} - Ateliê de Histórias</title>
            </Head>
            <div className="obra-detalhe-container">
                <div className="obra-capa">
                    {/* A alteração está aqui: objectFit foi alterado para 'cover' */}
                    <Image src={obra.imagem} alt={`Capa do livro ${obra.titulo}`} width={500} height={600} style={{ objectFit: 'cover' }}/>
                </div>
                <div className="obra-info">
                    <span className="post-category">{obra.categoria}</span>
                    <h1>{obra.titulo}</h1>
                    
                    <h2>Sinopse</h2>
                    <p>{obra.sinopse}</p>
                    
                    <h2>Temas Abordados</h2>
                    <ul>
                        {obra.temas.map(tema => <li key={tema}>{tema}</li>)}
                    </ul>

                    <h2>Detalhes da Ilustração</h2>
                    <p>{obra.ilustracao}</p>

                    <Link href="/obra" className="back-link">&larr; Voltar para a galeria de obras</Link>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(obras).map(slug => ({
        params: { slug },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ObraPageProps, IParams> = async (context) => {
    const { slug } = context.params!;
    const obra = obras[slug] || null;
    return {
        props: {
            obra,
        },
    };
};

export default ObraPage;