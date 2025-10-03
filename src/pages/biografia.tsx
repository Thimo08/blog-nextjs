import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const BiografiaPage = () => {
    return (
        <Layout>
            <Head>
                <title>Biografia de André Neves - Ateliê de Histórias</title>
            </Head>
            <article className="full-article">
                <span className="post-category">A Alma do Artista</span>
                <h1>As Raízes de Onde Tudo Nasce</h1>
                
                <Image src="/img/andre-neves-atelie.jpeg" alt="André Neves em seu ateliê" className="article-main-image" width={800} height={500} style={{ objectFit: 'cover' }}/>

                <h2>As Cores de Recife e as Memórias do Agreste</h2>
                <p>Para entender a obra de André Neves, é preciso voltar a Recife (PE), onde ele nasceu em 1973. A vivacidade cultural do Nordeste, com seu artesanato, seus mamulengos (fantoches típicos) e suas festas populares, está impregnada em cada página que ele cria. As cores quentes, os tecidos de chita e as texturas rústicas não são apenas escolhas estéticas; são a própria memória afetiva de sua infância transbordando para o papel.</p>

                <blockquote>
                    "Eu não ilustro, eu costuro as histórias. Cada retalho, cada botão, cada pedaço de madeira carrega um eco, uma vida passada que agora compõe uma nova narrativa."
                </blockquote>

                <h2>O Caçador de Coisas: Um Processo Criativo Único</h2>
                <p>Aqui está algo que poucos sabem: André Neves se define como um "caçador de coisas". Seu ateliê é um tesouro de objetos encontrados: caixas antigas, rendas, madeiras de demolição, brinquedos quebrados e fotografias amareladas. Para ele, esses objetos não são lixo, são fragmentos de histórias esperando para serem contadas. Ele os coleta, limpa e organiza, e quando começa a ilustrar um livro, mergulha nesse acervo para encontrar a "pele" de seus personagens. É por isso que suas ilustrações têm uma profundidade quase tridimensional, parecem vivas, com alma.</p>

                <h2>Prêmios e Reconhecimento: A Arte que Fala Universalmente</h2>
                <p>Embora suas raízes sejam profundamente brasileiras, a linguagem de sua arte é universal. André Neves já recebeu os prêmios mais importantes da literatura infantil brasileira, como o Prêmio Jabuti e o selo "Altamente Recomendável" da FNLIJ (Fundação Nacional do Livro Infantil e Juvenil) diversas vezes. Além disso, suas obras foram selecionadas para importantes exposições internacionais, como a Bienal de Ilustração da Bratislava, e publicadas em países como Itália, Espanha e México, provando que temas como amizade, medo e esperança não têm fronteiras.</p>

                <Link href="/" className="back-link">&larr; Voltar para a página inicial</Link>

            </article>
        </Layout>
    );
};

export default BiografiaPage;