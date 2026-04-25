import { Info } from "lucide-react-native";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EXERCISES } from "../data/mockExercises";

export default function DetailScreen({ route, navigation }) {
  const { id, name, muscle, difficulty } = route.params || {};

  const exercise = EXERCISES.find((ex) => ex.id === id);

  if (!exercise) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Exercício não encontrado</Text>
        <TouchableOpacity
          style={styles.backButtonError}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonTextError}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleAddToWorkout = () => {
    Alert.alert("Sucesso!", `${exercise.name} foi adicionado ao seu treino.`, [
      {
        text: "Continuar",
        style: "default",
      },
      {
        text: "Ver Treino",
        onPress: () => navigation.navigate("ListScreen"),
        style: "default",
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={exercise.image} style={styles.headerImage} />

      <View style={styles.detailsBox}>
        <Text style={styles.category}>{exercise.muscle}</Text>
        <Text style={styles.title}>{exercise.name}</Text>

        <View style={styles.infoRow}>
          <Info color="#da291c" size={20} />
          <Text style={styles.description}>
            Este exercício foca no fortalecimento do{" "}
            {exercise.muscle.toLowerCase()}. Mantenha a postura ereta e controle
            a respiração durante a execução.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleAddToWorkout}
        >
          <Text style={styles.actionText}>Adicionar ao Treino</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  headerImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  detailsBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  category: {
    fontSize: 12,
    color: "#da291c",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#323131",
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginVertical: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  description: {
    flex: 1,
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  actionButton: {
    marginTop: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  errorText: {
    fontSize: 18,
    color: "#323131",
    marginBottom: 20,
  },
});
