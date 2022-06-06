import { StyledContainer } from "./style";
import { Text, FontSize } from "../../helpers/text";

function Footer() {
  return (
    <StyledContainer>
      <Text
        color="white"
        size={FontSize.ExtraRegular}
        styles={{
          fontFamily: "caveat",
          textAlign: "center",
          marginTop: "0.5rem",
        }}
      >
        Forever & Always our love
      </Text>
      <Text
        color="white"
        size={FontSize.Regular}
        styles={{ marginTop: "0.7rem", fontFamily: "caveat" }}
      >
        - Tanya & Aseem
      </Text>
    </StyledContainer>
  );
}

export default Footer;
