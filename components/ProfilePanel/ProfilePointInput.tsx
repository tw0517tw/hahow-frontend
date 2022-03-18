import { FC } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  min-width: 180px;
  display: flex;
  flex-direction: row;
`;

type ProfilePointInputProps = {
  value: number;
  maxValue: number;
  onChange: (newValue: number) => void;
};

const ProfilePointInput: FC<ProfilePointInputProps> = ({
  value,
  maxValue,
  onChange,
}) => {
  const handlePlus = () => {
    if (value + 1 > maxValue) {
      return;
    }
    onChange(value + 1);
  };

  const handleMinus = () => {
    if (value - 1 < 0) {
      return;
    }
    onChange(value - 1);
  };

  return (
    <InputWrapper>
      <button onClick={handleMinus}> - </button>
      <div style={{ margin: "0 12px" }}>{value}</div>
      <button onClick={handlePlus}> + </button>
    </InputWrapper>
  );
};

export default ProfilePointInput;
