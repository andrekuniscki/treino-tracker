import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide the header for the tabs, since tabs have their own headers */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Configure the dynamic details screen */}
      <Stack.Screen 
        name="exercise/[id]" 
        options={{ 
          title: 'Exercise Details',
          headerBackTitle: 'Back' 
        }} 
      />
    </Stack>
  );
}