import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { EXERCISES } from "../../data/mockExercises";

export default function ExercisesScreen() {
  const router = useRouter();

  // Requirement: Logic for "Infinite Scroll"
  const handleLoadMore = () => {
    console.log("Reached end of list, load more data here...");
  };

  // Requirement: Optimized rendering for FlatList
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/exercise/[id]",
          params: { id: item.id },
        })
      }
    >
      <Image source={item.image} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <View>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.muscleGroup}>
            {item.muscle} • {item.difficulty}
          </Text>
        </View>

        {/* Figma-style accent arrow */}
        <View style={styles.arrowCircle}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={EXERCISES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark theme
  },
  listPadding: {
    padding: 16,
    paddingBottom: 100, // Ensures list isn't hidden by the Tab bar
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333",
    // Professional elevation
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardImage: {
    width: "100%",
    height: 160,
    opacity: 0.8,
  },
  cardContent: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  muscleGroup: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
  arrowCircle: {
    backgroundColor: "#CCFF00", // Neon Lime from Figma
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
