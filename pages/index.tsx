import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layaout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layaout title="Pokemons list">
      <Button color={"gradient"}>Hello</Button>
    </Layaout>
  );
};

export default HomePage;
