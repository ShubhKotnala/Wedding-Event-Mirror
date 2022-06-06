import { StyledContainer } from "./style";
import { imgs } from "../../assets/images";
import MyImage from "../../helpers/image";

function Introduction() {
  const showAseemCard = () => {
    return (
      <MyImage
        src={imgs.Aseem}
        loading="lazy"
        alt="Aseem"
        className="intro-img"
      />
    );
  };

  const showTanyaCard = () => {
    return (
      <MyImage
        src={imgs.Tanya}
        loading="lazy"
        alt="Tanya"
        className="intro-img"
      />
    );
  };

  return (
    <StyledContainer>
      <MyImage
        src={imgs.brideGroom}
        loading="lazy"
        alt="Bride & Groom"
        className="headerImg"
      />
      <div className="container">
        {showTanyaCard()}
        <MyImage
          src={imgs.heart}
          loading="lazy"
          alt="Weds"
          className="logoImg"
        />
        {showAseemCard()}
      </div>
    </StyledContainer>
  );
}

export default Introduction;
