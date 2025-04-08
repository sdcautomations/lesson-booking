import { TextStylesInterface } from "@/theme";
import { TextStyle } from "react-native";

export function getTextStyle(
  mainTextStyle: TextStylesInterface,
  otherStyles: {}
) {
  return { ...mainTextStyle, ...otherStyles } as TextStyle;
}
