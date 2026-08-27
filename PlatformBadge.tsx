import { StyleSheet, View, Text, Image } from 'react-native';
import { colors, platforms, PlatformKey } from '@/theme/colors';
import { Youtube, Instagram, Facebook, Twitter, Music2 } from 'lucide-react-native';

const platformIcons: Record<PlatformKey, typeof Youtube> = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  tiktok: Music2,
};

export function PlatformBadge({ platform, size = 36 }: { platform: string; size?: number }) {
  const key = (platform?.toLowerCase() || 'youtube') as PlatformKey;
  const Icon = platformIcons[key] || Youtube;
  const p = platforms[key] || platforms.youtube;

  return (
    <View style={[styles.container, { width: size, height: size, backgroundColor: p.bg }]}>
      <Icon size={size * 0.5} color={p.color} strokeWidth={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
});
