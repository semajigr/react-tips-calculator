import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 456px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 45px;
`;
const Description = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: rgba(117, 108, 108, 0.57);
  margin-top: 0;
  margin-bottom: 45px;
`;

const Tips = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  margin-block: 45px;
`;

export { StyledForm, Title, Description, Tips };
