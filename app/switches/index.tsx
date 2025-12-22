//https://reactnative.dev/docs/switch
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import React, { useState } from "react";
import ThemedView from "../../presentation/shared/ThemedView";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemeCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-4"
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
