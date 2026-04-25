import { Calendar, Dumbbell, Play, Target } from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const categories = [
    { id: "1", name: "Treino Completo", icon: Dumbbell, screen: "ListScreen" },
    { id: "2", name: "Metas", icon: Target, screen: "ProfileScreen" },
    { id: "3", name: "Histórico", icon: Calendar, screen: "ProfileScreen" }, // Ajustar se houver tela de histórico
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Clean white header section */}
      <View style={styles.header}>
        <Text style={styles.brand}>
          TREINO<Text style={styles.highlight}>TRACKER</Text>
        </Text>
        <Text style={styles.tagline}>
          Acompanhe seu progresso e alcance seus objetivos.
        </Text>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate("ListScreen")}
        >
          <Text style={styles.buttonText}>Começar Treino</Text>
          <Play color="#f5f5f5" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate(category.screen)}
              >
                <IconComponent color="#da291c" size={32} />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    backgroundColor: "#f5f5f5",
    padding: 30,
    paddingTop: 60,
    alignItems: "center",
  },
  brand: {
    color: "#323131",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -1,
  },
  highlight: { color: "#323131" },
  tagline: {
    color: "#323131",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 30,
    textAlign: "center",
  },
  mainButton: {
    backgroundColor: "#da291c",
    flexDirection: "column",
    padding: 16,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
    maxWidth: 280,
  },
  buttonText: { color: "#f5f5f5", fontWeight: "bold", fontSize: 18 },
  categoriesSection: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#323131",
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: "column",
    width: "100%",
    maxWidth: 300,
  },
  categoryCard: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#323131",
    marginTop: 10,
    textAlign: "center",
  },
});
