import type { NextPage } from "next";
import HeroList from "../components/HeroList";

const Heroes: NextPage = () => {
  return (
    <div>
      <HeroList></HeroList>
      Heroes
    </div>
  );
};

export default Heroes;
