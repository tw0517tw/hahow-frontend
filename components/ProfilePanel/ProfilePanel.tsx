import axios from "axios";
import Image from "next/image";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import ProfilePointInput from "./ProfilePointInput";
import SaveProfileButton from "./SaveProfileButton";

const PanelWrapper = styled.div`
  display: flex;
  max-width: 720px;
  margin: 16px;
`;

const PanelSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  min-width: 240px;
`;

const Left = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: auto;
  row-gap: 10px;
`;

export type HeroProfile = {
  str: number;
  int: number;
  agi: number;
  luk: number;
};

type ProfilePanelProps = {
  heroId: string;
};

const ProfilePanel: FC<ProfilePanelProps> = ({ heroId }) => {
  const [localPoints, setLocalPoints] = useState({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });
  const { isLoading, isFetching, isError, isSuccess, data } =
    useQuery<HeroProfile>(
      ["heroProfile", heroId],
      async () => {
        const profileData = await axios
          .get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
          .then((res) => res.data);

        setLocalPoints(profileData);

        return profileData;
      },
      { refetchOnWindowFocus: false }
    );

  if (isError) {
    return <div>Error...😱</div>;
  }

  if (isLoading) {
    return (
      <Image src="/loading.png" width="100px" height="100px" alt="Loading" />
    );
  }

  if (isSuccess) {
    const localPointSum = Object.values(localPoints).reduce((sum, current) => {
      return sum + current;
    }, 0);

    const remotePointSum = Object.values(data).reduce((sum, current) => {
      return sum + current;
    }, 0);

    const pointAvailable = Math.max(remotePointSum - localPointSum, 0);

    return (
      <PanelWrapper>
        <PanelSide>
          <Left>
            <div>Str</div>
            <ProfilePointInput
              value={localPoints.str}
              maxValue={localPoints.str + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, str: newValue });
              }}
              isLoading={isFetching}
            ></ProfilePointInput>

            <div>Int</div>
            <ProfilePointInput
              value={localPoints.int}
              maxValue={localPoints.int + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, int: newValue });
              }}
              isLoading={isFetching}
            ></ProfilePointInput>

            <div>Agi</div>
            <ProfilePointInput
              value={localPoints.agi}
              maxValue={localPoints.agi + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, agi: newValue });
              }}
              isLoading={isFetching}
            ></ProfilePointInput>

            <div>Luk</div>
            <ProfilePointInput
              value={localPoints.luk}
              maxValue={localPoints.luk + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, luk: newValue });
              }}
              isLoading={isFetching}
            ></ProfilePointInput>
          </Left>
        </PanelSide>
        <PanelSide>
          <div>總點數: {remotePointSum}</div>
          <div>剩餘點數: {isFetching ? "🔄" : pointAvailable}</div>
          <SaveProfileButton
            heroId={heroId}
            profile={localPoints}
            disabled={pointAvailable !== 0}
          ></SaveProfileButton>
        </PanelSide>
      </PanelWrapper>
    );
  }

  // never here
  return null;
};

export default ProfilePanel;
