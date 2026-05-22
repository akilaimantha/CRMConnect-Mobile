import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

const priorityColors = {
  High: Colors.danger,
  Medium: Colors.warning,
  Low: Colors.success,
};

export default function TaskCard({ task, onToggleStatus, onDelete }) {
  const isCompleted = task.status === 'Completed';

  return (
    <View style={[styles.card, Shadows.card, isCompleted && styles.completedCard]}>
      <View style={styles.header}>
        <View style={[styles.priorityBadge, { backgroundColor: priorityColors[task.priority] || Colors.primary }]}>
          <Text style={styles.priorityText}>{task.priority}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => onToggleStatus(task.id)} style={styles.iconBtn}>
            <Ionicons
              name={isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
              size={26}
              color={isCompleted ? Colors.success : Colors.primaryLight}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.iconBtn}>
            <Ionicons name="trash-outline" size={22} color={Colors.danger} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.title, isCompleted && styles.completedText]}>{task.title}</Text>
      {task.description ? (
        <Text style={styles.description} numberOfLines={2}>
          {task.description}
        </Text>
      ) : null}
      <View style={styles.footer}>
        <Ionicons name="calendar-outline" size={14} color={Colors.textSecondary} />
        <Text style={styles.deadline}>{task.deadline}</Text>
        <View style={[styles.statusBadge, isCompleted && styles.statusCompleted]}>
          <Text style={styles.statusText}>{task.status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  completedCard: {
    opacity: 0.75,
    borderLeftColor: Colors.success,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  priorityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BorderRadius.pill,
  },
  priorityText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 4,
    marginLeft: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: Colors.textSecondary,
  },
  description: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  deadline: {
    fontSize: 12,
    color: Colors.textSecondary,
    flex: 1,
    marginLeft: 4,
  },
  statusBadge: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BorderRadius.pill,
  },
  statusCompleted: {
    backgroundColor: Colors.primaryLight,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
  },
});
