import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

export default function CustomerCard({ customer, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, Shadows.card]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{customer.name.charAt(0)}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.company}>{customer.company}</Text>
        <View style={styles.row}>
          <Ionicons name="call-outline" size={14} color={Colors.primary} />
          <Text style={styles.detail}>{customer.phone}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={22} color={Colors.primaryLight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  company: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detail: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
});
