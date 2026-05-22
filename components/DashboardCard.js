import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

export default function DashboardCard({ title, value, accentColor = Colors.primary }) {
  return (
    <View style={[styles.card, Shadows.card]}>
      <View style={[styles.topBorder, { backgroundColor: accentColor }]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color: accentColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  topBorder: {
    height: 4,
    borderRadius: 2,
    marginBottom: Spacing.sm,
    width: '100%',
  },
  title: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
  },
});
