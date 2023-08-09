import type { FC } from "react";
import Head from "next/head";

const Metadata: FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{`${title ? title + " | " : ""}NOC DIIT`}</title>
      <meta name="description" content="NOC NYC DOE DIIT" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="NOC NYC DOE DIIT" />
      <meta property="og:description" content="NOC NYC DOE DIIT" />
    </Head>
  );
};

export default Metadata;
