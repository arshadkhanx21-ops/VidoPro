import { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/theme/colors';

type GlowButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  size?: 'small' | 'medium' | 'large';
};

export function GlowButton({
  children,
  onPress,
  disabled,
  loading,
  style,
  size = 'medium',
}: GlowButtonProps) {
  const height = size === 'small' ? 44 : size === 'large' ? 56 : 50;
  const fontSize = size === 'small' ? 14 : size === 'large' ? 18 : 16;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.85}
      style={[styles.container, disabled && styles.disabled, style]}
    >
      <LinearGradient
        colors={disabled ? ['#3A3A48', '#2A2A38'] : ['#FF8C42', '#FF6B00', '#E55A00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { height }]}
      >
        {loading ? (
          <ActivityIndicator color={colors.textPrimary} size="small" />
        ) : (
          <Text style={[styles.text, { fontSize }]}>{children}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 24,
  },
  text: {
    color: colors.textPrimary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  disabled: {
    shadowOpacity: 0,
    elevation: 0,
  },
});
