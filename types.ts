
export interface LoanPeriodConfig {
  minLoanAmount: number;
  maxLoanAmount: number;
  wagePercent: number;
}

export interface LoanConfigs {
  [key: string]: LoanPeriodConfig;
}

export interface CalculatorState {
  requestedAmount: number;
  months: number;
}

export interface CalculationResult {
  walletCredit: number;
  installment: number;
  principal: number;
}
