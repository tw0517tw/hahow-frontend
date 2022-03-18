import axios from "axios";
import { FC } from "react";
import { useMutation } from "react-query";
import { HeroProfile } from "./ProfilePanel";

type SaveProfileButton = {
  heroId: string;
  profile: HeroProfile;
};

const SaveProfileButton: FC<SaveProfileButton> = ({ heroId, profile }) => {
  const { mutate } = useMutation((profile: HeroProfile) => {
    return axios.patch(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
      profile
    );
  });

  return (
    <button
      onClick={() => {
        mutate(profile);
      }}
    >
      儲存
    </button>
  );
};

export default SaveProfileButton;
