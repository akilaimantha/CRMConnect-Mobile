import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, BorderRadius } from '../styles/GlobalStyles';

export default function SlicLogo({ size = 'medium' }) {
  const scale = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;

  return (
    <View style={[styles.container, { transform: [{ scale }] }]}>
      <View style={styles.slicRow}>
        <Text style={styles.slicText}>SLIC</Text>
        <View style={styles.dot} />
      </View>
      <View style={styles.lifeBar}>
        <Text style={styles.lifeText}>LIFE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  slicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopLeftRadius: BorderRadius.sm,
    borderTopRightRadius: BorderRadius.sm,
    minWidth: 100,
    justifyContent: 'center',
  },
  slicText: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 22,
    letterSpacing: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginLeft: 6,
    opacity: 0.9,
  },
  lifeBar: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: BorderRadius.sm,
    borderBottomRightRadius: BorderRadius.sm,
  },
  lifeText: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 2,
  },
});
