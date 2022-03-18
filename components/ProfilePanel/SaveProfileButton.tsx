import axios from "axios";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { HeroProfile } from "./ProfilePanel";

type SaveProfileButton = {
  heroId: string;
  profile: HeroProfile;
};

const SaveProfileButton: FC<SaveProfileButton> = ({ heroId, profile }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (profile: HeroProfile) => {
      return axios.patch(
        `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
        profile
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["heroProfile", heroId]);
      },
    }
  );

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
