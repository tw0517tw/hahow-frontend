import React from "react";
import { FC, useState } from "react";
import styled from "styled-components";
import HeroCard from "./HeroCard";

export const heroes = [
  {
    id: "1",
    name: "Daredevil",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
  },
  {
    id: "2",
    name: "Thor",
    image:
      "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
  },
  {
    id: "3",
    name: "Iron Man",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
  },
  {
    id: "4",
    name: "Hulk",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 540px;
`;

const HeroList: FC = () => {
  return (
    <List>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero}></HeroCard>
      ))}
    </List>
  );
};

// 因為需求所以 memo 避免 re-render，不一定需要
export default React.memo(HeroList);
