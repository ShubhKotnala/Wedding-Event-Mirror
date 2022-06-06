/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import { imgs } from "../../assets/images";
import MyImage from "../../helpers/image";

function SpecialRequests() {
  const relatives = [
    {
      logo: imgs.tayi,
      name: "Geeta & Naveen Bansal",
      relationship: "Tayi - Taya",
    },
    {
      logo: imgs.muma,
      name: "Neelu & Sandeep Bansal",
      relationship: "Mumma - Papa",
    },
    {
      logo: imgs.gudu,
      name: "Nitika & Neeraj Garg",
      relationship: "Behen - Jiju",
    },
    {
      logo: imgs.divya,
      name: "Divya & Nitin Bansal",
      relationship: "Bhabhi - Bhai",
    },
  ];

  const showCard = (item: any, index: number) => {
    return (
      <Card key={index}>
        <MyImage
          src={item?.logo}
          loading="lazy"
          alt={item?.relationship}
          className="logo"
        />

        <Text
          size={FontSize.ExtraRegular}
          weight={FontWeight.Bold}
          styles={{
            fontFamily: "Marck Script, cursive",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
          color="#668679"
        >
          {item?.name}
        </Text>
        <Text
          size={FontSize.ExtraRegular}
          styles={{
            fontFamily: "Caveat",
            marginTop: "0.5rem",
            textAlign: "center",
          }}
          color="#cd5453"
        >
          {item?.relationship}
        </Text>
      </Card>
    );
  };

  return (
    <StyledContainer>
      <MyImage
        src={imgs.specialRequest}
        alt="Special Request"
        className="headerImg"
        loading="lazy"
      />
      <div className="divider" />

      <div className="slideshow">{relatives.map((i, j) => showCard(i, j))}</div>
    </StyledContainer>
  );
}

export default SpecialRequests;
