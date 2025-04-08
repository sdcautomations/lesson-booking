import {
  DimensionValue,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { getTextStyle } from "@/utils";
import { Colors, TextStyles } from "@/theme";

export interface ButtonProps {
  onClick: () => void;
  children?: string;
  fullWidth?: boolean;
  containerStyle?: {};
  labelStyle?: {};
}

export function Button({
  onClick,
  children = "Click Me",
  fullWidth = false,
  containerStyle = {},
  labelStyle = {},
}: ButtonProps) {
  const containerWidth: DimensionValue = fullWidth ? "100%" : "auto";
  const containerStyles: StyleProp<ViewStyle> = {
    ...containerStyle,
    width: containerWidth,
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primaryColor,
  };

  const labelStyles: StyleProp<TextStyle> = getTextStyle(
    TextStyles.copy,
    labelStyle
  );

  return (
    <Pressable style={containerStyles} onPress={onClick}>
      <Text style={labelStyles}>{children}</Text>
    </Pressable>
  );
}
