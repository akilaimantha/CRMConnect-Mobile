import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CustomersScreen from '../screens/CustomersScreen';
import CustomerDetailsScreen from '../screens/CustomerDetailsScreen';
import TasksScreen from '../screens/TasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import { Colors, BorderRadius } from '../styles/GlobalStyles';

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: { backgroundColor: Colors.primary },
  headerTintColor: Colors.white,
  headerTitleStyle: { fontWeight: '700' },
};

function LogoutButton() {
  const { logout } = useApp();
  return (
    <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
      <Ionicons name="log-out-outline" size={18} color={Colors.text} />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'CRMConnect Sales Panel',
          headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name="Customers"
        component={CustomersScreen}
        options={{ title: 'Customers' }}
      />
      <Stack.Screen
        name="CustomerDetails"
        component={CustomerDetailsScreen}
        options={{ title: 'Customer Profile' }}
      />
      <Stack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{ title: 'Tasks' }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{ title: 'New Task' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { isLoggedIn } = useApp();

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: BorderRadius.pill,
    marginRight: 4,
    gap: 4,
  },
  logoutText: {
    fontWeight: '700',
    fontSize: 13,
    color: Colors.text,
  },
});
