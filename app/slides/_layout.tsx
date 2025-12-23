import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
