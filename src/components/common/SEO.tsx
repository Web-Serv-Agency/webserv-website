import Head from "next/head";

function SEO({
  title = "Web Serv | Developer Agency",
  description = "Turning your ideas into reality through technology",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
