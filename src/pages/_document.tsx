import {
  createGetInitialProps,
  createStylesServer,
  ServerStyles,
} from "@mantine/next";
import { rtlCache } from "app/setup/rtl";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";

const stylesServer = createStylesServer(rtlCache);

const getInitialProps = createGetInitialProps();

export default function Document({ locale }: { locale: string }) {
  console.log(locale);

  return (
    <Html dir={locale === "ar" ? "rtl" : "en"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await getInitialProps(ctx);

  return {
    ...initialProps,

    styles: [
      initialProps.styles,
      <ServerStyles
        html={initialProps.html}
        server={stylesServer}
        key="styles"
      />,
    ],
  };
};
