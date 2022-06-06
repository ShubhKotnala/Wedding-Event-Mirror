import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 5rem;
  margin-top: 1rem;

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .divider {
    height: 16px;
  }

  .slideshow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 200px;
  width: 100%;
  
  .logo {
    width: 100%;
    height: 200px;
  }
`;
