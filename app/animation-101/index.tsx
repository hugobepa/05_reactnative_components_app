import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true, //usa hardward
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true, //usa hardward
    }).start();
  };

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{ height: 150, width: 150, opacity: animatedOpacity }}
      />

      <ThemedButton className="my-5" onPress={fadeIn}>
        fadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={fadeOut}>
        fadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
