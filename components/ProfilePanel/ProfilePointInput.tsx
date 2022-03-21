import { FC } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  min-width: 180px;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  padding: 0 4px;
`;

type ProfilePointInputProps = {
  value: number;
  maxValue: number;
  onChange: (newValue: number) => void;
  isLoading?: boolean;
};

const ProfilePointInput: FC<ProfilePointInputProps> = ({
  value,
  maxValue,
  onChange,
  isLoading = false,
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
      <Button onClick={handleMinus}>-</Button>
      <div style={{ margin: "0 12px" }}>{isLoading ? "🔄" : value}</div>
      <Button onClick={handlePlus}>+</Button>
    </InputWrapper>
  );
};

export default ProfilePointInput;
