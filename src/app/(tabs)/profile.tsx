import { useRouter } from "expo-router";
import {
    Platform,
    ProgressBarAndroid,
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
    <View style={styles.page}>
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
          <Text style={styles.fieldLabel}>Aluno</Text>
          <Text style={styles.fieldValue}>[Seu Nome]</Text>
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
            {Platform.OS === "android" ? (
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={goal.current / goal.target}
                color="#0a7ea4"
              />
            ) : (
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${(goal.current / goal.target) * 100}%` },
                  ]}
                />
              </View>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f7fbff",
    padding: 24,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0a7ea4",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#5f6d7a",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  avatarPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#eaf5fb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  avatarText: {
    fontSize: 32,
    color: "#0a7ea4",
    fontWeight: "700",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  fieldLabel: {
    fontSize: 16,
    color: "#7a8a99",
  },
  fieldValue: {
    fontSize: 16,
    color: "#1f3340",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  goalsSection: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0a7ea4",
    marginBottom: 20,
  },
  goalItem: {
    marginBottom: 20,
  },
  goalLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  goalValue: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0a7ea4",
  },
});
