import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useApp } from '../context/AppContext';
import { Colors, BorderRadius, Spacing } from '../styles/GlobalStyles';

const PRIORITIES = ['Low', 'Medium', 'High'];

export default function AddTaskScreen({ navigation }) {
  const { addTask } = useApp();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Please enter a task title.');
      return;
    }
    if (!deadline.trim()) {
      Alert.alert('Validation', 'Please enter a deadline (e.g. 2026-05-30).');
      return;
    }
    addTask({
      title: title.trim(),
      description: description.trim(),
      deadline: deadline.trim(),
      priority,
    });
    Alert.alert('Success', 'Task created successfully.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Task Title *</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Follow up with client"
        placeholderTextColor={Colors.textSecondary}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Task details..."
        placeholderTextColor={Colors.textSecondary}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      <Text style={styles.label}>Deadline *</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={Colors.textSecondary}
        value={deadline}
        onChangeText={setDeadline}
      />

      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityRow}>
        {PRIORITIES.map((p) => (
          <TouchableOpacity
            key={p}
            style={[styles.priorityBtn, priority === p && styles.priorityBtnActive]}
            onPress={() => setPriority(p)}
          >
            <Text
              style={[styles.priorityBtnText, priority === p && styles.priorityBtnTextActive]}
            >
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.9}>
        <Text style={styles.saveBtnText}>Create Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
    marginTop: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  priorityRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  priorityBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: BorderRadius.pill,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
  },
  priorityBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  priorityBtnText: {
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  priorityBtnTextActive: {
    color: Colors.white,
  },
  saveBtn: {
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.pill,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  saveBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
  },
  cancelBtn: {
    alignItems: 'center',
    paddingVertical: Spacing.md,
    marginBottom: Spacing.xl,
  },
  cancelText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },
});
