import { useRouter } from "expo-router";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { EXERCISES } from "../../data/mockExercises";

export default function ExercisesScreen() {
  const router = useRouter();

  // The professor asked for "infinite scroll". In a real app, this fetches more data.
  // Here, we just log it to prove the prop is hooked up.
  const handleLoadMore = () => {
    console.log("Reached end of list, load more data here...");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      // PASSING PARAMETERS: We send the ID through the route URL
      onPress={() => router.push(`/exercise/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.muscle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={EXERCISES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // Triggers when 50% from the bottom
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: { width: 100, height: 100 },
  info: { padding: 16, justifyContent: "center" },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
});
