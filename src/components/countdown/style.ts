import styled from "styled-components";
import { imgs } from "../../assets/images";

export const Container = styled.div`
  width: 100vw;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  & > * {
    margin: 0.5rem;
  }
`;

export const StyledTimerContainer = styled.div`
  background-image: url(${imgs.ring});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`;

export const SecondContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
