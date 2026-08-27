export const colors = {
  background: '#0A0A0F',
  surface: '#15151D',
  surfaceLight: '#1E1E28',
  card: '#1A1A24',
  border: '#2A2A38',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  primary: '#FF6B00',
  primaryLight: '#FF8C42',
  primaryDark: '#E55A00',
  accent: '#FFB800',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  glow: '#FF6B00',
  overlay: 'rgba(10, 10, 15, 0.8)',
};

export const gradients = {
  primary: ['#FF6B00', '#FF3D00'] as [string, string],
  accent: ['#FFB800', '#FF6B00'] as [string, string],
  button: ['#FF8C42', '#FF6B00', '#E55A00'] as [string, string, string],
};

export const platforms = {
  youtube: { name: 'YouTube', color: '#FF0000', bg: '#1A0A0A' },
  instagram: { name: 'Instagram', color: '#E1306C', bg: '#1A0A12' },
  facebook: { name: 'Facebook', color: '#1877F2', bg: '#0A0F1A' },
  twitter: { name: 'Twitter', color: '#1DA1F2', bg: '#0A111A' },
  tiktok: { name: 'TikTok', color: '#00F2EA', bg: '#0A1A1A' },
} as const;

export type PlatformKey = keyof typeof platforms;
