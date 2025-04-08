import {
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  StyleSheet,
} from "react-native";

import { TextStyles, Colors } from "@/theme";
import { getTextStyle } from "@/utils";

export interface LessonCardProps {
  title: string;
  date: string;
  time: string;
  duration: number;
}

export function LessonCard({ title, date, time, duration }: LessonCardProps) {
  return (
    <Pressable style={styles.containerStyle}>
      <View style={styles.temporaryIcon}></View>

      <View style={styles.contentWrapper}>
        <Text style={styles.contentHeader}>{title}</Text>

        <Text style={styles.content}>
          {date}, {time}, {duration} godziny
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
    backgroundColor: Colors.lightBackgroundGrey,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  temporaryIcon: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: Colors.primaryColor,
  },
  contentWrapper: { flexDirection: "column", gap: 8 },
  contentHeader: getTextStyle(TextStyles.headerSmall, {
    color: Colors.textCopy,
  }),
  content: getTextStyle(TextStyles.copySmall, { color: Colors.textGrey }),
});
