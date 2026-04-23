import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

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
];

export default function HistoryScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.historyItem}>
      <View>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.exercises}>{item.exercises.join(", ")}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Treinos</Text>
      <FlatList
        data={mockHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7fbff", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a7ea4",
    marginBottom: 20,
  },
  list: { paddingBottom: 20 },
  historyItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  date: { fontSize: 16, fontWeight: "bold", color: "#0a7ea4" },
  exercises: { fontSize: 14, color: "#666", marginTop: 5 },
  duration: { fontSize: 12, color: "#999", marginTop: 5 },
});
