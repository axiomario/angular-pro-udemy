export interface ICalculatorService {
    result(): string;
    subresult(): string;
    operator(): string;
    processValue(value: string): void;
}