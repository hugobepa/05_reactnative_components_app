import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  //const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: "red", dark: "indigo" },
    "background"
  );
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <ThemedText className="mt-20">Welcome to Layout!</ThemedText>
          <Slot />
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
