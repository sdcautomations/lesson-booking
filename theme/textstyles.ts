import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const REGULAR_FONT = "Ubuntu_400Regular";
const BOLD_FONT = "Ubuntu__700Bold";

export const TextStyles = StyleSheet.create({
  copySmall: {
    fontFamily: REGULAR_FONT,
    fontSize: 14,
    fontWeight: 400,
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
    fontWeight: 700,
  },
  header: {
    fontSize: 20,
    fontFamily: BOLD_FONT,
    fontWeight: 700,
  },
  headerBig: {
    fontSize: 24,
    fontFamily: BOLD_FONT,
    fontWeight: 700,
  },
});
