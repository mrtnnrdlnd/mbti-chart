export interface MBTIType {
    abbreviation: string;
    primaryFunction: CognetiveFunction;
    secondaryFunction: CognetiveFunction;
}

export enum CognetiveFunction {
    Fi = "Fi",
    Fe = "Fe",
    Ti = "Ti",
    Te = "Te",
    Si = "Si",
    Se = "Se",
    Ni = "Ni",
    Ne = "Ne"
}

export let MBTITypes: MBTIType[] = [
    {abbreviation: "INTP", primaryFunction: CognetiveFunction.Ti, secondaryFunction: CognetiveFunction.Ne},
    {abbreviation: "ENTP", primaryFunction: CognetiveFunction.Ne, secondaryFunction: CognetiveFunction.Ti},
    {abbreviation: "INTJ", primaryFunction: CognetiveFunction.Ni, secondaryFunction: CognetiveFunction.Te},
    {abbreviation: "ENFP", primaryFunction: CognetiveFunction.Ne, secondaryFunction: CognetiveFunction.Fi},
    {abbreviation: "INFJ", primaryFunction: CognetiveFunction.Ni, secondaryFunction: CognetiveFunction.Fe},
    {abbreviation: "ENFJ", primaryFunction: CognetiveFunction.Fe, secondaryFunction: CognetiveFunction.Ni},
    {abbreviation: "INFP", primaryFunction: CognetiveFunction.Fi, secondaryFunction: CognetiveFunction.Ne},
    {abbreviation: "ESFJ", primaryFunction: CognetiveFunction.Fe, secondaryFunction: CognetiveFunction.Si},
    {abbreviation: "ISFP", primaryFunction: CognetiveFunction.Fi, secondaryFunction: CognetiveFunction.Se},
    {abbreviation: "ESFP", primaryFunction: CognetiveFunction.Se, secondaryFunction: CognetiveFunction.Fi},
    {abbreviation: "ISFJ", primaryFunction: CognetiveFunction.Si, secondaryFunction: CognetiveFunction.Fe},
    {abbreviation: "ESTP", primaryFunction: CognetiveFunction.Se, secondaryFunction: CognetiveFunction.Ti},
    {abbreviation: "ISTJ", primaryFunction: CognetiveFunction.Si, secondaryFunction: CognetiveFunction.Te},
    {abbreviation: "ESTJ", primaryFunction: CognetiveFunction.Te, secondaryFunction: CognetiveFunction.Si},
    {abbreviation: "ISTP", primaryFunction: CognetiveFunction.Ti, secondaryFunction: CognetiveFunction.Se},
    {abbreviation: "ENTJ", primaryFunction: CognetiveFunction.Te, secondaryFunction: CognetiveFunction.Ni},
]

export enum JudgingFunction {
    Fi,
    Fe,
    Ti,
    Te
}

export enum PersievingFunction {
    Si,
    Se,
    Ni,
    Ne
}
