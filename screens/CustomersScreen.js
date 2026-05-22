import React, { useState, useMemo } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import BottomNav from '../components/BottomNav';
import { Ionicons } from '@expo/vector-icons';
import CustomerCard from '../components/CustomerCard';
import { useApp } from '../context/AppContext';
import { Colors, BorderRadius, Spacing } from '../styles/GlobalStyles';

export default function CustomersScreen({ navigation }) {
  const { customers } = useApp();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q)
    );
  }, [customers, search]);

  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={20} color={Colors.primary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search customers..."
          placeholderTextColor={Colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 ? (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        ) : null}
      </View>

      <Text style={styles.count}>
        {filtered.length} customer{filtered.length !== 1 ? 's' : ''}
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomerCard
            customer={item}
            onPress={() => navigation.navigate('CustomerDetails', { customerId: item.id })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No customers found.</Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
    <BottomNav navigation={navigation} activeRoute="Customers" />
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
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.pill,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.text,
  },
  count: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
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
