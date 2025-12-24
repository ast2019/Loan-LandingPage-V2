
import { LoanConfigs } from './types';

export const THEME_COLORS = {
  primary: "#ea4037",
  primaryLight: "#f1716a",
  primarySoft: "#fef2f2",
  accent: "#333333",
  accentSoft: "#f5f5f5",
  success: "#16A34A",
  danger: "#DC2626",
  textMain: "#111111",
  textSecondary: "#666666",
  border: "#E2E8F0",
  background: "#f5f5f5",
  white: "#FFFFFF"
};

export const LOAN_PERIOD_OPTIONS = [
  { value: 12, label: "۱۲ ماهه" },
  { value: 18, label: "۱۸ ماهه" },
  { value: 24, label: "۲۴ ماهه" }
];

export const LOAN_CONFIGS: LoanConfigs = {
  "12": { minLoanAmount: 10000000, maxLoanAmount: 200000000, wagePercent: 23 },
  "18": { minLoanAmount: 10000000, maxLoanAmount: 200000000, wagePercent: 23 },
  "24": { minLoanAmount: 10000000, maxLoanAmount: 200000000, wagePercent: 23 }
};

export const SLIDER_CONFIG = {
  min: 10000000,
  max: 200000000,
  step: 10000000,
  defaultValue: 50000000
};
