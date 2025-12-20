import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Slot } from "expo-router";
import { Text, useColorScheme, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  //const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="flex flex-1 items-center justify-center bg-light-background dark:bg-dark-background">
        <Text className="mt-20 text-xl font-bold text-light-primary">
          Welcome to Layout!
        </Text>
        <Slot />
      </View>
    </ThemeProvider>
  );
}
