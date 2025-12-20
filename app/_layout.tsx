import { Slot } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  //const colorScheme = useColorScheme();

  return (
    <View className="flex flex-1 items-center justify-center bg-light-background dark:bg-dark-background">
      <Text className="mt-20 text-xl font-bold text-light-primary">
        Welcome to Layout!
      </Text>
      <Slot />
    </View>
  );
}
