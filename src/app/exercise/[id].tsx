import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Info } from "lucide-react-native";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EXERCISES } from "../../data/mockExercises";

/**
 * Tela de detalhes do exercício
 * Exibe informações completas, imagem animada e opções de ação
 */
export default function Details() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Validação e conversão de parâmetros
  const exerciseId = Array.isArray(params.id) ? params.id[0] : params.id;

  // Busca o exercício na lista baseado no ID passado por parâmetro
  const exercise = EXERCISES.find((ex) => ex.id === exerciseId);

  // Tratamento de erro: exercício não encontrado
  if (!exercise) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Exercício não encontrado</Text>
        <TouchableOpacity
          style={styles.backButtonError}
          onPress={() => router.back()}
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
        onPress: () => router.push("/exercises"),
        style: "default",
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: exercise.name,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginLeft: 16, padding: 8 }}
            >
              <ArrowLeft size={24} color="#323131" />
            </TouchableOpacity>
          ),
        }}
      />

      <Image source={exercise.image} style={styles.headerImage} />

      <View style={styles.detailsBox}>
        <Text style={styles.category}>{exercise.muscle}</Text>
        <Text style={styles.title}>{exercise.name}</Text>

        {/* Card com informações do exercício */}
        <View style={styles.infoRow}>
          <Info color="#da291c" size={20} />
          <Text style={styles.description}>
            Este exercício foca no fortalecimento do{" "}
            {exercise.muscle.toLowerCase()}. Mantenha a postura ereta e controle
            a respiração durante a execução.
          </Text>
        </View>

        {/* Botão de ação: adicionar ao treino */}
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
  headerImage: { width: "100%", height: 400 },
  detailsBox: {
    marginTop: -40,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    minHeight: 500,
  },
  category: {
    color: "#323131",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    color: "#323131",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
  },
  description: { color: "#323131", flex: 1, lineHeight: 22 },
  actionButton: {
    backgroundColor: "#da291c",
    padding: 14,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  actionText: { color: "#f5f5f5", fontWeight: "bold", fontSize: 14 },
  errorContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#323131",
    fontSize: 18,
    marginBottom: 20,
  },
  backButtonError: {
    backgroundColor: "#da291c",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
  },
  backButtonTextError: {
    color: "#f5f5f5",
    fontWeight: "bold",
  },
});
