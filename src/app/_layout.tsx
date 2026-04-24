// src/app/_layout.tsx
import { Stack, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{ marginLeft: 16, padding: 8 }}
    >
      <ArrowLeft size={24} color="#323131" />
    </TouchableOpacity>
  );
}

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f5f5f5",
        },
        headerTintColor: "#323131",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerShadowVisible: false,
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exercise/[id]"
        options={{
          title: "Detalhes do Exercício",
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
}
