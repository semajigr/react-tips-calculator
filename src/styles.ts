import styled from "styled-components";
import circles from "../src/assets/circles.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  background: url(${circles}) no-repeat #eaf2f2;
  padding-top: 80px;
`;

export { Container };
