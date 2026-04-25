import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress, variant = "primary", style }) {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.primary : styles.secondary,
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
      <Text
        style={[
          styles.text,
          variant === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#da291c",
  },
  secondary: {
    backgroundColor: "#e0e0e0",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#f5f5f5",
  },
  secondaryText: {
    color: "#323131",
  },
});
