import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import BottomNav from '../components/BottomNav';
import { Ionicons } from '@expo/vector-icons';
import { BarChart, PieChart } from 'react-native-chart-kit';
import DashboardCard from '../components/DashboardCard';
import { useApp } from '../context/AppContext';
import { RECENT_ACTIVITIES } from '../data/mockData';
import { Colors, BorderRadius, Shadows, Spacing } from '../styles/GlobalStyles';

const screenWidth = Dimensions.get('window').width - Spacing.lg * 2;

const chartConfig = {
  backgroundColor: Colors.white,
  backgroundGradientFrom: Colors.white,
  backgroundGradientTo: Colors.white,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 121, 121, ${opacity})`,
  labelColor: () => Colors.textSecondary,
  barPercentage: 0.6,
  propsForBackgroundLines: {
    stroke: Colors.border,
  },
};

export default function DashboardScreen({ navigation }) {
  const { stats, tasks, userName } = useApp();

  const pending = tasks.filter((t) => t.status !== 'Completed').length;
  const completed = tasks.filter((t) => t.status === 'Completed').length;

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [2, 3, 1, 4, completed + 1] }],
  };

  const pieData = [
    { name: 'Pending', population: pending, color: Colors.accent, legendFontColor: Colors.text },
    { name: 'Done', population: completed || 1, color: Colors.primary, legendFontColor: Colors.text },
  ];

  return (
    <SafeAreaView style={styles.safe}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <View style={styles.profilePill}>
          <Ionicons name="person" size={16} color={Colors.primary} />
          <Text style={styles.profileText}>{userName.split(' ')[0]}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Overview</Text>
      <View style={styles.metricsRow}>
        <DashboardCard title="Total Customers" value={String(stats.totalCustomers)} accentColor={Colors.primary} />
        <DashboardCard title="Pending Tasks" value={String(stats.pendingTasks)} accentColor={Colors.accent} />
      </View>
      <View style={styles.metricsRow}>
        <DashboardCard title="Completed Tasks" value={String(stats.completedTasks)} accentColor={Colors.primary} />
        <DashboardCard title="Recent Comms" value={String(stats.recentComms)} accentColor={Colors.text} />
      </View>

      <Text style={styles.sectionTitle}>Task Completion</Text>
      <View style={[styles.chartCard, Shadows.card]}>
        <BarChart
          data={barData}
          width={screenWidth - Spacing.md * 2}
          height={180}
          chartConfig={chartConfig}
          style={styles.chart}
          fromZero
          showValuesOnTopOfBars
        />
      </View>

      <Text style={styles.sectionTitle}>Task Status</Text>
      <View style={[styles.chartCard, Shadows.card]}>
        <PieChart
          data={pieData}
          width={screenWidth - Spacing.md * 2}
          height={160}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="12"
          absolute
        />
      </View>

      <View style={[styles.activityCard, Shadows.card]}>
        <View style={styles.activityHeader}>
          <Text style={styles.activityHeaderText}>Recent Sales Activities</Text>
        </View>
        {RECENT_ACTIVITIES.map((item) => (
          <View key={item.id} style={styles.activityRow}>
            <Text style={styles.activityCustomer}>{item.customer}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text style={styles.activityDate}>{item.date}</Text>
          </View>
        ))}
      </View>

      <View style={styles.quickNav}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.navigate('Customers')}
        >
          <Ionicons name="people" size={24} color={Colors.primary} />
          <Text style={styles.navLabel}>Customers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.navigate('Tasks')}
        >
          <Ionicons name="checkbox" size={24} color={Colors.primary} />
          <Text style={styles.navLabel}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <BottomNav navigation={navigation} activeRoute="Dashboard" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  greeting: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
  },
  profilePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: BorderRadius.pill,
    gap: 6,
    ...Shadows.card,
  },
  profileText: {
    fontWeight: '600',
    color: Colors.primary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  chartCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chart: {
    borderRadius: BorderRadius.sm,
  },
  activityCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.lg,
    overflow: 'hidden',
  },
  activityHeader: {
    backgroundColor: Colors.primary,
    padding: Spacing.md,
  },
  activityHeaderText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  activityCustomer: {
    flex: 1,
    fontWeight: '600',
    fontSize: 14,
  },
  statusBadge: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BorderRadius.pill,
    marginRight: Spacing.sm,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
  },
  activityDate: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  quickNav: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  navBtn: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.card,
  },
  navLabel: {
    marginTop: Spacing.sm,
    fontWeight: '600',
    color: Colors.primary,
  },
});
