import ThemedCard from "@/presentation/shared/ThemeCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useColorScheme } from "nativewind";
import { useState } from "react";

const ThemesScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");

    setDarkModeSettings({ darkMode: value, systemMode: false });
  };

  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          onValueChange={setDarkMode}
          value={darkModeSettings.darkMode}
        />

        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          onValueChange={setSystemMode}
          value={darkModeSettings.systemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
