import styled from "styled-components";
import circles from "../src/assets/circles.svg";

const Body = styled.body`
  background: #eaf2f2;
`;

const Container = styled.div`
  max-width: 1500px;
  background: url(${circles}) no-repeat;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Body, Container };
