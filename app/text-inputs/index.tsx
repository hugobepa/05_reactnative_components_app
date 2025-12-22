//https://reactnative.dev/docs/textinput
//https://reactnative.dev/docs/keyboardavoidingview
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const isIOS = Platform.OS === "ios";
//behavior={isIos ? 'height' : undefined}
//style={{ marginBottom: isIOS ? 100 : 10 }
const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
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

            <ThemedTextInput
              placeholder="Correo eletronico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder="telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemeCard>

          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard style={{ marginBottom: isIOS ? 100 : 10 }}>
            <ThemedTextInput
              placeholder="telefono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemeCard>
        </ThemedView>

        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
