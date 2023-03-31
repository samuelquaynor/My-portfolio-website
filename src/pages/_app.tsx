import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="/vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="/vendor/waypoints/noframework.waypoints.js"></Script>
      <Script src="/vendor/php-email-form/validate.js"></Script>
      <Component {...pageProps} />
      <Script src="/js/main.js"></Script>
    </div>
  );
}
