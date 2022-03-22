import axios, { AxiosError } from "axios";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";

import Button from "../Button";

import { HeroProfile } from "./ProfilePanel";

type SaveProfileButton = {
  heroId: string;
  profile: HeroProfile;
  disabled?: boolean;
};

const SaveProfileButton: FC<SaveProfileButton> = ({
  heroId,
  profile,
  disabled = false,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation<
    string,
    AxiosError,
    HeroProfile
  >(
    (profile) =>
      axios
        .patch(
          `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
          profile
        )
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["heroProfile", heroId]);
      },
    }
  );

  return (
    <div style={{ marginTop: "8px" }}>
      <Button
        fontSize="24px"
        onClick={() => {
          mutate(profile);
        }}
        disabled={disabled || isLoading}
      >
        {isLoading ? "🔄" : "儲存"}
      </Button>
      <div style={{ color: "red" }}>{isError && error.message}</div>
    </div>
  );
};

export default SaveProfileButton;
