import React, { useCallback } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { ExerciseCard } from "../components/exercise-card";
import { EXERCISES } from "../data/mockExercises";

/**
 * Tela de listagem de exercícios com FlatList otimizado
 * Exibe 10+ exercícios com navegação para detalhes
 */
export default function ListScreen({ navigation }) {
  /**
   * Callback para infinite scroll (scroll infinito)
   * Chamado quando o usuário chega ao final da lista
   */
  const handleLoadMore = useCallback(() => {
    console.log("Reached end of list, load more data here...");
  }, []);

  /**
   * Renderiza cada item da lista usando o componente reutilizável
   * Otimizado com useCallback para melhor performance
   */
  const renderItem = useCallback(
    ({ item }) => (
      <ExerciseCard
        id={item.id}
        name={item.name}
        muscle={item.muscle}
        difficulty={item.difficulty}
        image={item.image}
      />
    ),
    [],
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
        scrollIndicatorInsets={{ right: 1 }}
        removeClippedSubviews={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listPadding: {
    padding: 12,
    paddingBottom: 100,
  },
});
