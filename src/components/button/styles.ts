import styled from "styled-components";

const CustomButton = styled.button`
  width: 100%;
  height: 61px;
  background-color: #2ed2c9;
  border: none;
  color: #fff;
  margin-bottom: 138px;
  font-size: 24px;
  line-height: 35px;

  &:disabled {
    background-color: #2ed2c9;
    opacity: 0.3;
  }
`;

export { CustomButton };
