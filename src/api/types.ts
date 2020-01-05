export interface ProfileEntity {
    id: number;
    name: string;
    email: string;
    gender: string;
    bornOn: string | null;
    age: number | null;
    distance: number | null;
}

export interface RecommendedProfileEntity {
    id: number;
    name: string;
    gender: string;
    age: number | null;
    distance: number | null;
}

export interface ErrorData {
    status: number;
    message: string;
    description?: string;
}
