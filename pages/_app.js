import { useEffect } from 'react';
import { StoreProvider } from '../components/Store'
import '../styles/globals.css'
import "../styles/nprogress.css";
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const jssStyles=document.querySelector("#jss-server-styles");
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[])
  return (
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>)
}

MyApp.getInitialProps = async ()=>{
  return {
    pageProps: {
      commercePublicKey:process.env.COMMERCE_PUBLIC_KEY,
    }
  }
}

export default MyApp;
