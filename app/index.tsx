import { Button, LessonCard } from "@/components";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <LessonCard
        title="Jazda po mieście"
        date="12 kwietnia"
        time="10:00"
        duration={2}
      />

      <Button onClick={() => {}} fullWidth={true} />
    </View>
  );
}
