import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import BottomNav from '../components/BottomNav';
import { Ionicons } from '@expo/vector-icons';
import TaskCard from '../components/TaskCard';
import { useApp } from '../context/AppContext';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

export default function TasksScreen({ navigation }) {
  const { tasks, updateTask, deleteTask } = useApp();

  const handleToggle = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      updateTask(id, {
        status: task.status === 'Completed' ? 'Pending' : 'Completed',
      });
    }
  };

  const handleDelete = (id) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) },
    ]);
  };

  const pending = tasks.filter((t) => t.status !== 'Completed');
  const completed = tasks.filter((t) => t.status === 'Completed');

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <View style={styles.summaryRow}>
        <View style={[styles.summaryBox, { borderColor: Colors.accent }]}>
          <Text style={[styles.summaryNum, { color: Colors.accent }]}>{pending.length}</Text>
          <Text style={styles.summaryLabel}>Pending</Text>
        </View>
        <View style={[styles.summaryBox, { borderColor: Colors.primary }]}>
          <Text style={[styles.summaryNum, { color: Colors.primary }]}>{completed.length}</Text>
          <Text style={styles.summaryLabel}>Completed</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddTask')}
        activeOpacity={0.9}
      >
        <Ionicons name="add-circle" size={22} color={Colors.text} />
        <Text style={styles.addBtnText}>Add New Task</Text>
      </TouchableOpacity>

      <FlatList
        data={[...pending, ...completed]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggleStatus={handleToggle}
            onDelete={handleDelete}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Tap "Add New Task" to create one.</Text>
        }
      />
    </View>
    <BottomNav navigation={navigation} activeRoute="Tasks" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  summaryBox: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    alignItems: 'center',
    borderTopWidth: 4,
    ...Shadows.card,
  },
  summaryNum: {
    fontSize: 28,
    fontWeight: '800',
  },
  summaryLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.pill,
    paddingVertical: 14,
    marginBottom: Spacing.md,
    gap: 8,
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  list: {
    paddingBottom: Spacing.xl,
  },
  empty: {
    textAlign: 'center',
    color: Colors.textSecondary,
    marginTop: 40,
    fontSize: 15,
  },
});
