import { useRouter } from "expo-router";
import { Calendar, Dumbbell, Play, Target } from "lucide-react-native";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  const categories = [
    { id: "1", name: "Treino Completo", icon: Dumbbell, screen: "/exercises" },
    { id: "2", name: "Metas", icon: Target, screen: "/profile" },
    { id: "3", name: "Histórico", icon: Calendar, screen: "/history" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Figma Style: Big Hero Image with Overlay */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000",
        }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.brand}>
            TREINO<Text style={styles.highlight}>TRACKER</Text>
          </Text>
          <Text style={styles.tagline}>
            Acompanhe seu progresso e alcance seus objetivos.
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => router.push("/exercises")}
          >
            <Text style={styles.buttonText}>Começar Treino</Text>
            <Play color="black" size={20} fill="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => router.push(category.screen)}
              >
                <IconComponent color="#0a7ea4" size={32} />
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
  container: { flex: 1, backgroundColor: "#000" },
  hero: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    padding: 30,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingBottom: 100,
  },
  brand: { color: "#fff", fontSize: 32, fontWeight: "900", letterSpacing: -1 },
  highlight: { color: "#CCFF00" }, // Neon Lime Green from many fitness Figmas
  tagline: { color: "#ccc", fontSize: 16, marginTop: 10, marginBottom: 30 },
  mainButton: {
    backgroundColor: "#CCFF00",
    flexDirection: "row",
    padding: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: { fontWeight: "bold", fontSize: 18 },
  categoriesSection: { padding: 20, backgroundColor: "#f7fbff" },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a7ea4",
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    backgroundColor: "#fff",
    width: "30%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
});
