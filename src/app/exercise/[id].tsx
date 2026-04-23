import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Info } from "lucide-react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EXERCISES } from "../../data/mockExercises";

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const exercise = EXERCISES.find((ex) => ex.id === id);

  if (!exercise) return <Text>Exercício não encontrado</Text>;

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Image source={exercise.image} style={styles.headerImage} />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft color="#fff" size={24} />
      </TouchableOpacity>

      <View style={styles.detailsBox}>
        <Text style={styles.category}>{exercise.muscle}</Text>
        <Text style={styles.title}>{exercise.name}</Text>

        <View style={styles.infoRow}>
          <Info color="#CCFF00" size={20} />
          <Text style={styles.description}>
            Este exercício foca no fortalecimento do{" "}
            {exercise.muscle.toLowerCase()}. Mantenha a postura ereta e controle
            a respiração durante a execução.
          </Text>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Adicionar ao Treino Hoje</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  headerImage: { width: "100%", height: 400 },
  detailsBox: {
    marginTop: -40,
    backgroundColor: "#121212",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    minHeight: 500,
  },
  category: {
    color: "#CCFF00",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 15,
  },
  description: { color: "#ccc", flex: 1, lineHeight: 22 },
  actionButton: {
    backgroundColor: "#CCFF00",
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
    alignItems: "center",
  },
  actionText: { fontWeight: "bold", fontSize: 16 },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
});
