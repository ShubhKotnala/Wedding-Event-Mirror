import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  background-image: url(${imgs.intro});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
`;
