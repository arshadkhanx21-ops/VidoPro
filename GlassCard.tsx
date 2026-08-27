import { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/theme/colors';

type GlassCardProps = {
  children: ReactNode;
  style?: ViewStyle;
  padding?: number;
};

export function GlassCard({ children, style, padding = 16 }: GlassCardProps) {
  return (
    <View style={[styles.wrapper, style]}>
      <LinearGradient
        colors={[colors.surfaceLight, colors.card]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { padding }]}
      >
        {children}
      </LinearGradient>
      <View style={styles.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    borderRadius: 20,
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'transparent',
  },
});
