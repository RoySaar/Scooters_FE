export interface ScootersTableData {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
}

export enum ScooterStatusFilter {
    None = "Select status",
    Active = "Active",
    Broken = "Broken",
    Handled = "Handled",
    Charged = "Charged",
}