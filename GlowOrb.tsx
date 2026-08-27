import { StyleSheet, View } from 'react-native';
import { colors } from '@/theme/colors';

export function GlowOrb({ size = 300, opacity = 0.08 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors.primary,
          opacity,
        },
      ]}
      pointerEvents="none"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
