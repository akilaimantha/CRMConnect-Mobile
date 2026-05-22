import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import SlicLogo from '../components/SlicLogo';
import { useApp } from '../context/AppContext';
import { Colors, BorderRadius, Spacing } from '../styles/GlobalStyles';
import { DEMO_CREDENTIALS } from '../data/mockData';

export default function LoginScreen() {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation', 'Please enter both email and password.');
      return;
    }
    const success = login(email, password);
    if (!success) {
      Alert.alert('Login Failed', 'Invalid email or password. Try the demo credentials below.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.decorCircle} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <SlicLogo size="large" />
            <Text style={styles.mainTitle}>Customer Relationship{'\n'}Management System</Text>
            <Text style={styles.subtitle}>Sri Lanka Insurance Corporation</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.signInTitle}>Sign In</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={Colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrap}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Enter your password"
                placeholderTextColor={Colors.textSecondary}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.9}>
              <Text style={styles.loginText}>Login</Text>
              <View style={styles.arrowCircle}>
                <Ionicons name="arrow-forward" size={18} color={Colors.white} />
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />
            <Text style={styles.hint}>
              Demo: {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  flex: {
    flex: 1,
  },
  decorCircle: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: Colors.primaryLight,
    opacity: 0.5,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: 60,
    paddingBottom: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  mainTitle: {
    color: Colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: Spacing.lg,
    lineHeight: 26,
  },
  subtitle: {
    color: Colors.textOnPrimary,
    fontSize: 14,
    marginTop: Spacing.sm,
    opacity: 0.9,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  signInTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.inputBg,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  passwordWrap: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  passwordInput: {
    marginBottom: 0,
    paddingRight: 48,
  },
  eyeBtn: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.pill,
    paddingVertical: 14,
    marginTop: Spacing.sm,
  },
  loginText: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginRight: Spacing.md,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.md,
  },
  hint: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
