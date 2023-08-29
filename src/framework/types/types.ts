export interface Plan {
    id: number;
    name: string;
    description: string;
    totalPlanned: number;
    totalActual: number;
    userId: number;
    user: string;
    budgetGroups: BudgetGroup[];
    createdAt: string;
    updatedAt: string;
}

export interface BudgetGroup {
    id: number;
    name: string;
    description: string;
    totalPlanned: number;
    totalActual: number;
    budgetItems: BudgetItem[];
    createdAt: string;
    updatedAt: string;
}

export interface BudgetItem {
    id: number;
    name: string;
    Type: number,
    Planned: number,
    Actual: number,
    BudgetGroupId: number;
    budgetGroup: string;
    createdAt: string;
    updatedAt: string;

}