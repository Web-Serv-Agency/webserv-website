import Head from "next/head";

function SEO({
  title = "Web Serv | Developer Agency",
  description = "Turning your ideas into reality through technology",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

export default SEO;
