// src/app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="exercise/[id]" options={{ title: 'Detalhes do Exercício' }} />
    </Stack>
  );
}