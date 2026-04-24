import { useRouter } from "expo-router";
import { Play } from "lucide-react-native";
import React, { useCallback } from "react";
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { HistoryCard } from "../../components/history-card";

const mockHistory = [
  {
    id: "1",
    date: "2024-04-20",
    exercises: ["Flexão", "Agachamento"],
    duration: "30 min",
  },
  {
    id: "2",
    date: "2024-04-19",
    exercises: ["Supino", "Rosca"],
    duration: "25 min",
  },
  {
    id: "3",
    date: "2024-04-18",
    exercises: ["Prancha", "Tríceps"],
    duration: "20 min",
  },
  {
    id: "4",
    date: "2024-04-17",
    exercises: ["Barra", "Ombro"],
    duration: "35 min",
  },
  {
    id: "5",
    date: "2024-04-16",
    exercises: ["Deadlift", "Afundo"],
    duration: "40 min",
  },
  {
    id: "6",
    date: "2024-04-15",
    exercises: ["Flexão", "Supino"],
    duration: "28 min",
  },
  {
    id: "7",
    date: "2024-04-14",
    exercises: ["Agachamento", "Afundo"],
    duration: "32 min",
  },
];

/**
 * Tela de histórico de treinos
 * Exibe lista de treinos anteriores com data, exercícios e duração
 */
export default function HistoryScreen() {
  const router = useRouter();

  /**
   * Renderiza cada item do histórico usando o componente reutilizável
   */
  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <TouchableOpacity
        onPress={() => handleWorkoutPress(item)}
        activeOpacity={0.7}
      >
        <HistoryCard
          date={item.date}
          exercises={item.exercises}
          duration={item.duration}
        />
      </TouchableOpacity>
    ),
    [],
  );

  const handleWorkoutPress = (workout: any) => {
    Alert.alert(
      "Repetir Treino",
      `Deseja repetir o treino de ${workout.date}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Repetir",
          onPress: () => router.push("/exercises"),
          style: "default",
        },
      ],
    );
  };

  const handleNewWorkout = () => {
    router.push("/exercises");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Histórico de Treinos</Text>
            <TouchableOpacity
              style={styles.newWorkoutButton}
              onPress={handleNewWorkout}
            >
              <Play size={16} color="#f5f5f5" />
              <Text style={styles.newWorkoutText}>Novo Treino</Text>
            </TouchableOpacity>
          </View>
        }
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#323131",
    textAlign: "center",
    marginBottom: 12,
  },
  newWorkoutButton: {
    backgroundColor: "#da291c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8,
  },
  newWorkoutText: {
    color: "#f5f5f5",
    fontSize: 14,
    fontWeight: "bold",
  },
  list: {
    padding: 12,
    paddingBottom: 100,
  },
});
