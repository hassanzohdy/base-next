import UIRoot from "app/layouts/UIRoot";
import { getLayoutComponent } from "app/setup";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const Layout = getLayoutComponent(Component);
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <UIRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIRoot>
    </>
  );
}
