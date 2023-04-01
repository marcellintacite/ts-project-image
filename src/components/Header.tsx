import Head from "next/head";

type PropsType = {
  title: string;
  description: string;
};

export default function Header(props: PropsType) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
