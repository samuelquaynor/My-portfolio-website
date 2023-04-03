import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
        <>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Quaynor Codes</title>
          <meta content="" name="description" />
          <meta content="" name="keywords" />
          {/* Favicons */}
          <link href="/img/favicon.ico" rel="icon" />
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
          />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          {/* Vendor CSS Files */}
          <link
            href="/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/remixicon/remixicon.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
          {/* Template Main CSS File */}
          <link href="/css/style.css" rel="stylesheet" />
          {/* =======================================================
  * Template Name: Personal
  * Updated: Mar 10 2023 with Bootstrap v5.2.3
  * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
