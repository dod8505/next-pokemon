import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  title?: string;
  children: JSX.Element;
};

export const Layaout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemón App"}</title>
        <meta name="author" content="DOD" />
        <meta
          name="description"
          content={`Información sobre el pókemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
