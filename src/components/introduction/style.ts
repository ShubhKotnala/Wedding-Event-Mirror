import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }

  .intro-img {
    width: 400px;
    height: 400px;
  }

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .logoImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  @media screen and (max-width: 1280px) {
    .intro-img {
      width: 100%;
      max-height: 350px;
      max-width: 350px;
    }
  }

  @media screen and (max-width: 1180px) {
    .intro-img {
      width: 100%;
      max-height: 320px;
      max-width: 320px;
    }

    .logoImg {
      width: 100%;
      max-height: 350px;
      max-width: 350px;
    }
  }

  @media screen and (max-width: 1070px) {
    .intro-img {
      width: 100%;
      max-height: 300px;
      max-width: 300px;
    }

    .logoImg {
      width: 100%;
      max-height: 320px;
      max-width: 320px;
    }
  }

  @media screen and (max-width: 1000px) {
    .intro-img {
      width: 100%;
      max-height: 280px;
      max-width: 280px;
    }

    .logoImg {
      width: 100%;
      max-height: 280px;
      max-width: 280px;
    }
  }


  @media screen and (max-width: 920px) {
    .container {
      display: flex;
      flex-direction: column;
    }

    .intro-img {
      width: 100%;
      max-height: 350px;
      max-width: 350px;
    }

    .logoImg {
      width: 100%;
      max-height: 250px;
      max-width: 250px;
    }
  }
`;
