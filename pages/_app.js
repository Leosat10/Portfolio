import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", "vscode");
  }
}, []);

  return (
    <Layout>
      <Head title={`Santhosh | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
