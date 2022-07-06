import { Button } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layaout } from "../components/layouts";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
  console.log({ props });

  return (
    <Layaout title="Pokemons list">
      <Button color={"gradient"}>Hello</Button>
    </Layaout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    props: { pokemons: data.results },
  };
};

export default HomePage;
