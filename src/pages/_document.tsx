import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* As fontes foram movidas para _app.tsx para melhor performance,
            mas você pode adicionar outras meta tags ou links globais aqui. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}