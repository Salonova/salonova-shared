import { IBaseEntity } from './base';
export interface ITenant extends Omit<IBaseEntity, 'tenant_id'> {
    name: string;
    slug: string;
    email: string;
    phone: string | null;
    address: string | null;
    logo_url: string | null;
    settings: ITenantSettings;
    subscription_id: string | null;
}
export interface ITenantSettings {
    currency: string;
    timezone: string;
    booking_interval_minutes: number;
    working_hours: IWorkingHours;
    auto_confirm_appointments: boolean;
}
export interface IWorkingHours {
    [day: string]: {
        open: string;
        close: string;
        is_closed: boolean;
    };
}
export interface ICreateTenantDTO {
    name: string;
    slug: string;
    email: string;
    phone?: string;
    address?: string;
    settings?: Partial<ITenantSettings>;
}
export interface IUpdateTenantDTO {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    logo_url?: string;
    settings?: Partial<ITenantSettings>;
}
