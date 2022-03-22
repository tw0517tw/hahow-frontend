import HeroCard, { HeroCardHero } from "./HeroCard";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FC } from "react";
import { useQuery } from "react-query";

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 360px;

  @media (max-width: 720px) {
    max-width: 360px;
  }
`;

const HeroList: FC = () => {
  const { isLoading, isError, data } = useQuery<HeroCardHero[]>("heroes", () =>
    axios
      .get("https://hahow-recruit.herokuapp.com/heroes")
      .then((res) => res.data)
  );

  if (isError) {
    return <div>Error...😱</div>;
  }

  if (isLoading) {
    return (
      <List>
        <HeroCard
          key="loading"
          hero={{
            id: "loading",
            name: "Loading...",
            image: "/loading.png",
          }}
        ></HeroCard>
      </List>
    );
  }

  return (
    <List>
      {data &&
        data.map((hero) => <HeroCard key={hero.id} hero={hero}></HeroCard>)}
    </List>
  );
};

// 因為需求所以 memo 避免 re-render，不一定需要
export default React.memo(HeroList);
