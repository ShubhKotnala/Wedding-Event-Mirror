import React from "react";
import { Interpolation } from "styled-components";
import { StyledText } from "./style";

export enum FontWeight {
  Light = "light", // 300
  Regular = "normal", // 400
  Medium = "medium", // 500
  SemiBold = "semi-bold", // 600
  Bold = "bold", // 700
  Black = "black", // 900
}

export enum FontSize {
  ExtraLarge = "extraLarge", // size - 60, LH - 60
  Large = "large", // size - 48, LH - 52.8
  MediumLarge = "mediumLarge", // size - 32, LH - 48
  ExtraRegular = "extraRegular", // size - 24, LH - 29
  Regular = "regular", // size - 18, LH - 21.6
  Small = "small", // size - 16, LH - 19.6
  ExtraSmall = "extraSmall", // size - 14, LH - 17
  Mini = "mini", // size - 12, LH - 15
}

export interface ITextProps {
  size?: FontSize;
  weight?: FontWeight;
  color?: string;
  children?: any;
  styles?: Interpolation<React.CSSProperties>;
}

export const Text = (props: ITextProps) => {
  const {
    children,
    size,
    weight,
    color,
    styles,
  } = props;

  
  return (
    <StyledText
      {...props}
      size={size}
      weight={weight}
      color={color}
      styles={styles}
    >
      {children}
    </StyledText>
  );
};
