import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  title?: string;
  children: JSX.Element;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

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

        <meta
          property="og:title"
          content={`Información sobre el pókemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
