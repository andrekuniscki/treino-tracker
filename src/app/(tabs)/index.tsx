import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Treino-Tracker! 🏋️</Text>
      <Text style={styles.subtitle}>Your personal fitness companion.</Text>

      {/* A quick action button to demonstrate manual navigation */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/exercises')}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 30 },
  button: { backgroundColor: '#0a7ea4', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});