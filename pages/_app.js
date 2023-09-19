import '@/styles/globals.css'

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from 'react';
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    import ("bootstrap/dist/js/bootstrap.min.js");
  },[])

  return  <SessionProvider ><Component {...pageProps} /></SessionProvider>
}


export async function getServerSideProps() {
    
  return { props: { Country,General,Jobs,Snapshot } }
}