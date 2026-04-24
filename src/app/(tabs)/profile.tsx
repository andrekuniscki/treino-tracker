import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const goals = [
    { label: "Treinos por Semana", current: 4, target: 5 },
    { label: "Exercícios Concluídos", current: 25, target: 30 },
    { label: "Minutos de Treino", current: 120, target: 150 },
  ];

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Meu Perfil</Text>
        <Text style={styles.subtitle}>
          Veja suas informações, metas e progresso.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.fieldLabel}>Tema</Text>
          <Text style={styles.fieldValue}>Automático (Sistema)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.fieldLabel}>Aluno</Text>
          <Text style={styles.fieldValue}>André Kuniscki</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.fieldLabel}>Versão do App</Text>
          <Text style={styles.fieldValue}>1.0.0</Text>
        </View>
      </View>

      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Metas e Progresso</Text>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalLabel}>{goal.label}</Text>
            <Text style={styles.goalValue}>
              {goal.current}/{goal.target}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(goal.current / goal.target) * 100}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => router.push("/exercises")}
      >
        <Text style={styles.navigationButtonText}>Ver Exercícios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 100,
  },
  header: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#323131",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#323131",
    lineHeight: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    marginVertical: 16,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#da291c",
  },
  avatarText: {
    fontSize: 32,
    color: "#da291c",
    fontWeight: "700",
  },
  infoRow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  fieldLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14,
    color: "#323131",
    fontWeight: "600",
    textAlign: "center",
  },
  goalsSection: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    width: "100%",
    maxWidth: 320,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#323131",
    marginBottom: 16,
    textAlign: "center",
  },
  goalItem: {
    marginBottom: 16,
  },
  goalLabel: {
    fontSize: 14,
    color: "#323131",
    marginBottom: 4,
    textAlign: "center",
  },
  goalValue: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#da291c",
  },
  navigationButton: {
    backgroundColor: "#da291c",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  navigationButtonText: {
    color: "#f5f5f5",
    fontSize: 16,
    fontWeight: "bold",
  },
});
