import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

function DetailRow({ icon, label, value, onPress }) {
  const content = (
    <View style={styles.detailRow}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={18} color={Colors.primary} />
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }
  return content;
}

export default function CustomerDetailsScreen({ route }) {
  const { customers } = useApp();
  const customer = customers.find((c) => c.id === route.params?.customerId);

  if (!customer) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Customer not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.profileCard, Shadows.card]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{customer.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.company}>{customer.company}</Text>
      </View>

      <Text style={styles.sectionTitle}>Contact Details</Text>
      <View style={[styles.card, Shadows.card]}>
        <DetailRow
          icon="call-outline"
          label="Phone"
          value={customer.phone}
          onPress={() => Linking.openURL(`tel:${customer.phone}`)}
        />
        <DetailRow
          icon="mail-outline"
          label="Email"
          value={customer.email}
          onPress={() => Linking.openURL(`mailto:${customer.email}`)}
        />
        <DetailRow icon="business-outline" label="Company" value={customer.company} />
      </View>

      <Text style={styles.sectionTitle}>Notes</Text>
      <View style={[styles.card, Shadows.card]}>
        <Text style={styles.notes}>{customer.notes}</Text>
      </View>

      <Text style={styles.sectionTitle}>Interaction History</Text>
      <View style={[styles.card, Shadows.card]}>
        {customer.interactions?.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <View style={styles.timelineDot} />
            <View style={styles.historyContent}>
              <View style={styles.historyHeader}>
                <View style={styles.mediumBadge}>
                  <Text style={styles.mediumText}>{item.type}</Text>
                </View>
                <Text style={styles.historyDate}>{item.date}</Text>
              </View>
              <Text style={styles.historyDesc}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Previous Communications</Text>
      <View style={[styles.commCard, Shadows.card]}>
        <View style={styles.commHeader}>
          <Text style={styles.commHeaderText}>Communications</Text>
        </View>
        {customer.communications?.map((comm) => (
          <View key={comm.id} style={styles.commItem}>
            <View style={styles.commTop}>
              <View style={styles.mediumBadgeTeal}>
                <Text style={styles.mediumTextTeal}>{comm.medium}</Text>
              </View>
              <Text style={styles.historyDate}>{comm.date}</Text>
            </View>
            <Text style={styles.commMessage}>{comm.message}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '800',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
  },
  company: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 15,
    color: Colors.text,
    marginTop: 2,
  },
  notes: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.text,
  },
  historyItem: {
    flexDirection: 'row',
    paddingVertical: Spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primaryLight,
    paddingLeft: Spacing.md,
    marginBottom: Spacing.sm,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: Spacing.sm,
    marginTop: 6,
  },
  historyContent: {
    flex: 1,
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  mediumBadge: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BorderRadius.pill,
    marginRight: Spacing.sm,
  },
  mediumText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
  },
  mediumBadgeTeal: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BorderRadius.pill,
  },
  mediumTextTeal: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
  },
  historyDate: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  historyDesc: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 20,
  },
  commCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.xl,
    overflow: 'hidden',
  },
  commHeader: {
    backgroundColor: Colors.accent,
    padding: Spacing.md,
  },
  commHeaderText: {
    fontWeight: '700',
    fontSize: 15,
    color: Colors.text,
  },
  commItem: {
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
  },
  commTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: Spacing.sm,
  },
  commMessage: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 20,
  },
});
