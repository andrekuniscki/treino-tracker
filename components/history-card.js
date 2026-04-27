import { Image, Platform, StyleSheet, Text, View } from "react-native";

/**
 * mapeia nomes de exercícios pra seus respectivos gifs
 */
const getExerciseGif = (exerciseName) => {
  const gifMap = {
    Flexão: require("../../assets/images/flexao.gif"),
    Agachamento: require("../../assets/images/agachamento.gif"),
    Barra: require("../../assets/images/barra.gif"),
    Deadlift: require("../../assets/images/deadlift.gif"),
    Supino: require("../../assets/images/supino.gif"),
    Afundo: require("../../assets/images/afundo-com-halteres.gif"),
    Prancha: require("../../assets/images/prancha.gif"),
    Rosca: require("../../assets/images/rosca.gif"),
    Tríceps: require("../../assets/images/tríceps.gif"),
    Ombro: require("../../assets/images/ombro.gif"),
  };

  return gifMap[exerciseName] || require("../../assets/images/flexao.gif");
};

/**
 * componente reutilizável para exibir um card de histórico de treino
 * @param props - dados do treino
 */
export function HistoryCard({ date, exercises, duration }) {
  // pega o primeiro exercício pra mostrar o gif
  const primaryExercise = exercises[0];
  const exerciseGif = getExerciseGif(primaryExercise);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.gifContainer}>
          <Image source={exerciseGif} style={styles.exerciseGif} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.exercises} numberOfLines={2}>
            {exercises.join(", ")}
          </Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    elevation: 2,
    // web: usar boxShadow em vez de shadow*
    ...Platform.select({
      web: {
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
    }),
  },
  cardContent: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  gifContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12,
  },
  exerciseGif: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
  },
  dateContainer: {
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#323131",
  },
  exercises: {
    fontSize: 14,
    color: "#323131",
    marginBottom: 4,
    fontWeight: "500",
  },
  duration: {
    fontSize: 12,
    color: "#666",
  },
});
