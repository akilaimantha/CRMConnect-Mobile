import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

const NAV_ITEMS = [
  { name: 'Dashboard', icon: 'grid', iconOutline: 'grid-outline', label: 'Dashboard' },
  { name: 'Customers', icon: 'people', iconOutline: 'people-outline', label: 'Customers' },
  { name: 'Tasks', icon: 'checkbox', iconOutline: 'checkbox-outline', label: 'Tasks' },
];

export default function BottomNav({ navigation, activeRoute }) {
  return (
    <View style={[styles.container, Shadows.card]}>
      {NAV_ITEMS.map((item) => {
        const active = activeRoute === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.tab, active && styles.tabActive]}
            onPress={() => navigation.navigate(item.name)}
          >
            <Ionicons
              name={active ? item.icon : item.iconOutline}
              size={22}
              color={active ? Colors.primary : Colors.textSecondary}
            />
            <Text style={[styles.label, active && styles.labelActive]}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  tabActive: {
    backgroundColor: Colors.inputBg,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  labelActive: {
    color: Colors.primary,
  },
});
