import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { obras } from '@/data/obras';

const ObrasPage = () => {
    return (
        <Layout>
            <Head>
                <title>Obras de André Neves - Ateliê de Histórias</title>
            </Head>
            <h3 className="section-title">Explore o Ateliê</h3>
            <section className="atelier-grid">
                {Object.entries(obras).map(([slug, obra]) => (
                    <article key={slug} className="obra-card">
                        <Image src={obra.imagem} alt={`Capa do livro ${obra.titulo}`} width={300} height={350} style={{ objectFit: 'cover' }} />
                        <h4>{obra.titulo}</h4>
                        <Link href={`/obra/${slug}`} className="read-more">Descobrir</Link>
                    </article>
                ))}
            </section>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>
            </div>
        </Layout>
    );
};

export default ObrasPage;