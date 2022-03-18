import axios from "axios";
import React from "react";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import HeroCard, { HeroCardHero } from "./HeroCard";

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 480px;
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
