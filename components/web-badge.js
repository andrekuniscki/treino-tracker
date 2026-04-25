import { version } from "expo/package.json";
import React from "react";
import { StyleSheet } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

import { Spacing } from "../constants/theme";

export default function WebBadge() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="small" style={styles.versionText}>
        Web Version - Expo v{version}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.five,
    alignItems: "center",
    gap: Spacing.two,
  },
  versionText: {
    textAlign: "center",
  },
  badgeImage: {
    width: 123,
    aspectRatio: 123 / 24,
  },
});
