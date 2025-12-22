//https://reactnative.dev/docs/textinput
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ThemedView margin>
      <ThemeCard className="mb-5">
        <ThemedTextInput
          placeholder="Nombre completo"
          autoCapitalize={"words"}
          // autoComplete= 'name'
          //keyboardType="numeric"
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemeCard>

      <ThemeCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemeCard>

      <ThemedTextInput />
    </ThemedView>
  );
};
export default TextInputsScreen;
