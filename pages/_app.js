import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DDT6XX1CBM"></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DDT6XX1CBM'});`
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}

export default MyApp;
