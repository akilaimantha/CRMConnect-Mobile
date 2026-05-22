export const Colors = {
  primary: '#007979',
  primaryLight: '#339999',
  primaryDark: '#005656',
  accent: '#FFCC00',
  accentDark: '#E6B800',
  white: '#FFFFFF',
  background: '#F4F7F8',
  inputBg: '#E8F0FE',
  text: '#1A1A1A',
  textSecondary: '#5A6A6A',
  textOnPrimary: '#FFFFFF',
  border: '#D0DDE0',
  success: '#2E8B57',
  warning: '#E67E22',
  danger: '#C0392B',
  cardShadow: '#000000',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 25,
  round: 999,
};

export const Typography = {
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  body: {
    fontSize: 14,
    color: Colors.text,
  },
  caption: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
  },
};

export const Shadows = {
  card: {
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
};
