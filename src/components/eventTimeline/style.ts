import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  
  .divider {
    height: 2rem;
  }

  .details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .mapImg{
    width: 100%;
    height: 250px;
    border-radius: 0.5rem;
    margin-top: -2rem;
    cursor: pointer;
  }

  .dateTime{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 10%);
    padding: 1rem;
    border-radius: 1rem;
    z-index: 10;
    cursor: pointer;
    text-align: center;
  }
`;
