import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import ThemedText from "../shared/ThemedText";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;

  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({
  title,
  icon,
  name,
  isFirst = false,
  isLast = false,
}: Props) => {
  const [routeName] = name.split("/");
  const primaryColor = useThemeColor({}, "primary");
  return (
    <Pressable
      onPress={() => router.push(name.split("/")[0] as Href)}
      className="bg-gray-500/50 items-center p-2  font-semibold hover:cursor-pointer dark:bg-black/15 rounded-md w-2/4 mb-4"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className="flex flex-row">
        <Ionicons name={icon} size={30} color={primaryColor} className="mr-5" />
        <ThemedText type="h2">{title}</ThemedText>
      </View>
    </Pressable>
  );
};

export default MenuItem;
