import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog em Homenagem à André Neves</title>
      </Head>
      <section className="bio-section">
        <div className="bio-image">
          <Image src="/img/andre-neves.jpg" alt="Foto do autor André Neves" width={400} height={400} style={{ objectFit: 'cover' }}/>
        </div>
        <div className="bio-content">
          <h3 className="section-title" style={{ textAlign: 'left', marginTop: 0 }}>A Alma do Nordeste em Suas Mãos</h3>
          <p>Toda a magia de André Neves nasce em um lugar: Recife. As cores vibrantes dos mercados, as texturas do artesanato e os contos populares do agreste são a matéria-prima de sua arte.</p>
          <Link href="/biografia" className="read-more">Explorar Biografia &rarr;</Link>
        </div>
      </section>

      <h3 className="section-title">Explore os Artigos e Atividades</h3>
      <section className="atelier-grid">
        <article className="post-card">
          <div className="card-image" style={{ backgroundImage: 'url(/img/obras.jpg)' }}></div>
          <div className="card-content">
            <span className="post-category">Decifrando a Arte</span>
            <h3>A Caixa de Ferramentas de André Neves</h3>
            <p>Analisamos a genialidade de suas colagens e como cada textura conta um pedaço da história.</p>
            <Link href="/artigo" className="read-more">Ver Análise</Link>
          </div>
        </article>
        <article className="post-card">
          <div className="card-image" style={{ backgroundImage: 'url(/img/andre2.png)'}}></div>
          <div className="card-content">
            <span className="post-category">Mergulho nas Histórias</span>
            <h3>As Grandes Mensagens de "A Caixa de Jéssica"</h3>
            <p>Uma simples caixa pode esconder um universo de amizade e imaginação. Exploramos os temas profundos deste livro.</p>
            <Link href="/mensagens" className="read-more">Descobrir</Link>
          </div>
        </article>
        <article className="post-card interactive-card">
          <div className="card-content">
            <span className="post-category">Participe!</span>
            <h3>Qual personagem de André Neves você seria?</h3>
            <p>Responda nosso quiz e descubra com qual dos seus personagens sonhadores você mais se parece!</p>
            <Link href="/quiz" className="read-more-interactive">Fazer o Quiz!</Link>
          </div>
        </article>
      </section>
    </Layout>
  );
}