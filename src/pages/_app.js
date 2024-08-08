import "../styles/globals.css";
import "../styles/mixins/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import MetaSEO from "@/module/NextSeo";
import Wrapper from "@/shared/components/wrapper";
export const runtime = "experimental-edge";
function App({ Component, pageProps, router, seoData }) {
  return (
    <>
      <MetaSEO seo={seoData} />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default App;
