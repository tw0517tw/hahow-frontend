import axios from "axios";
import Image from "next/image";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import ProfilePointInput from "./ProfilePointInput";
import SaveProfileButton from "./SaveProfileButton";

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

  if (isLoading || isFetching) {
    return (
      <Image src="/loading.png" width="100px" height="100px" alt="Loading" />
    );
  }

  if (isSuccess) {
    const localPointSum = Object.values(localPoints).reduce((sum, curr) => {
      return sum + curr;
    }, 0);

    const remotePointSum = Object.values(data).reduce((sum, curr) => {
      return sum + curr;
    }, 0);

    const pointAvailable = Math.max(remotePointSum - localPointSum, 0);

    return (
      <div>
        <div>
          <div>
            Str
            <ProfilePointInput
              value={localPoints.str}
              maxValue={localPoints.str + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, str: newValue });
              }}
            ></ProfilePointInput>
          </div>

          <div>
            Int
            <ProfilePointInput
              value={localPoints.int}
              maxValue={localPoints.int + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, int: newValue });
              }}
            ></ProfilePointInput>
          </div>

          <div>
            Agi
            <ProfilePointInput
              value={localPoints.agi}
              maxValue={localPoints.agi + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, agi: newValue });
              }}
            ></ProfilePointInput>
          </div>

          <div>
            Luk
            <ProfilePointInput
              value={localPoints.luk}
              maxValue={localPoints.luk + pointAvailable}
              onChange={(newValue) => {
                setLocalPoints({ ...localPoints, luk: newValue });
              }}
            ></ProfilePointInput>
          </div>

          <div>總點數: {remotePointSum}</div>
          <div>剩餘點數: {pointAvailable}</div>
          <SaveProfileButton
            heroId={heroId}
            profile={localPoints}
          ></SaveProfileButton>
        </div>
      </div>
    );
  }

  // never here
  return null;
};

export default ProfilePanel;
