import Head from "next/head";

const CustomHead = ({ title }) => {
  const fullTitle = title || "Leosat | Portfolio";

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content="Leosat's portfolio — systems, Linux, low-level experiments."
      />

      <meta
        name="keywords"
        content="Leosat, portfolio, systems programming, linux, low level"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content="Leosat's portfolio — systems, Linux, low-level experiments."
      />
      <meta
        property="og:image"
        content="https://portfolio-leosat.vercel.app/og.png"
      />
      <meta
        property="og:url"
        content="https://portfolio-leosat.vercel.app/"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content="Leosat's portfolio — systems, Linux, low-level experiments."
      />
      <meta
        name="twitter:image"
        content="https://portfolio-leosat.vercel.app/og.png"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Leosat | Portfolio",
};