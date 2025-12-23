import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
//import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  //const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: "white", dark: "indigo" },
    "background"
  );
  //const colorScheme = useColorScheme();

  //const titles = Object.values(allRoutes).map((route) => route.title);

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: { backgroundColor: backgroundColor },
            headerStyle: { backgroundColor: backgroundColor },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Components App",
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.title}
              name={route.title}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
