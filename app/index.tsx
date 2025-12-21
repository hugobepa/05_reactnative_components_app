import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { View } from "react-native";

const ComponentApp = () => {
  return (
    <ThemedView margin>
      <View className="my-5 ">
        {animationMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.name}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        ))}
      </View>

      <View className="my-5 ">
        {uiMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.name}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === uiMenuRoutes.length - 1}
          />
        ))}
      </View>

      <View className="my-5 ">
        {menuRoutes.map((route, index) => (
          <MenuItem
            key={route.name}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === menuRoutes.length - 1}
          />
        ))}
      </View>
    </ThemedView>
  );
};

export default ComponentApp;
