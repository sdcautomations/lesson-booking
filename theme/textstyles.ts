import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const REGULAR_FONT = "Ubuntu_400Regular";
const BOLD_FONT = "Ubuntu_700Bold";

export interface TextStylesInterface {
  fontFamily: string;
  fontSize: number;
}

export const TextStyles = StyleSheet.create({
  copySmall: {
    fontFamily: REGULAR_FONT,
    fontSize: 14,
  },
  copy: {
    fontFamily: REGULAR_FONT,
    fontSize: 16,
  },
  copyBig: {
    fontFamily: REGULAR_FONT,
    fontSize: 18,
  },
  headerSmall: {
    fontSize: 16,
    fontFamily: BOLD_FONT,
  },
  header: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
  },
  headerBig: {
    fontSize: 24,
    fontFamily: BOLD_FONT,
  },
});
