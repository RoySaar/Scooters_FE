export type Location = {
    latitude: number;
    longitude: number;
}

export type Scooter = {
    id: string;
    currentLocation: Location;
    model: string;
    yearOfManufacture: number;
    status: ScooterStatus;
}

export enum ScooterStatus {
    Active = 'active',
    Broken = 'broken',
    Handled = 'handled',
    Charged = 'charged',
}

export type User = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type Parking = {
    address: string;
    maxScooters: number;
    location: Location;
}

export type Failure = {
    type: FailureType;
    status: FailureStatus;
    openingTime: number;
    closingTime: number;
}

export enum FailureType {
    RoutineCare,
    BrakeReplacement,
    WheelReplacement,
}

export enum FailureStatus {
    Open,
    Care,
    Closed,
}
