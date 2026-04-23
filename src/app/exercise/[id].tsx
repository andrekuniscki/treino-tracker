import { Stack, useLocalSearchParams } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { EXERCISES } from "../../data/mockExercises";

export default function ExerciseDetailsScreen() {
  // RECEIVING PARAMETERS
  const { id } = useLocalSearchParams();

  // Find the specific exercise based on the ID
  const exercise = EXERCISES.find((ex) => ex.id === id);

  if (!exercise) {
    return <Text style={styles.error}>Exercise not found.</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Dynamic Header override based on the item */}
      <Stack.Screen options={{ title: exercise.name }} />

      <Image source={{ uri: exercise.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.detail}>Primary Muscle: {exercise.muscle}</Text>
        <Text style={styles.detail}>Difficulty: {exercise.difficulty}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Add to Workout"
            onPress={() =>
              Alert.alert("Success", `${exercise.name} added to your workout!`)
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  image: { width: "100%", height: 250 },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  detail: { fontSize: 18, color: "#444", marginBottom: 8 },
  buttonContainer: { marginTop: 30 },
  error: { flex: 1, textAlign: "center", marginTop: 50, fontSize: 18 },
});
