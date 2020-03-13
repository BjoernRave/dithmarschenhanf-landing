import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => {
  const title = "Dithmarschenhanf";
  const url = "https://dithmarschenhanf.de";
  const description =
    "Dithmarschenhanf ist ein junges Projekt, welches Hanf als Nutzprodukt neu entdeckt und neu erfindet. Wir bauen den Nutzhanf auf unserem eigenen Feld an.";

  const logo = `${url}/logoCircle.png`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/logo_32.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={logo} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dithmarschenhanf" />
      <meta property="og:image" content={logo} />

      <link rel="canonical" href={url} />

      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;
