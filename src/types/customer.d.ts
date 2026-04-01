import { IBaseEntity } from './base';
export interface ICustomer extends IBaseEntity {
    name: string;
    phone: string | null;
    email: string | null;
    gender: string | null;
    date_of_birth: string | null;
    notes: string | null;
    total_visits: number;
    total_spent: number;
    last_visit_at: string | null;
}
export interface ICreateCustomerDTO {
    name: string;
    phone?: string;
    email?: string;
    gender?: string;
    date_of_birth?: string;
    notes?: string;
}
export interface IUpdateCustomerDTO {
    name?: string;
    phone?: string;
    email?: string;
    gender?: string;
    date_of_birth?: string;
    notes?: string;
}
