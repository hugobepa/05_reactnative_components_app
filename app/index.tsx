import { animationMenuRoutes } from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import { Href, Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const ComponentApp = () => {
  return (
    <ThemedView margin>
      <Text className="mb-4">Welcome to Index!</Text>
      {animationMenuRoutes.map((route, index) => (
        <Link key={route.name} href={route.name.split("/")[0] as Href}>
          {route.title}
        </Link>
      ))}
    </ThemedView>
  );
};

export default ComponentApp;
