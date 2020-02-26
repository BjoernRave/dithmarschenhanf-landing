import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/logo_32.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>Dithmarschenhanf</title>
      <meta
        name="description"
        content="An inventory management system focussed on small warehouses and wholesalers"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;
