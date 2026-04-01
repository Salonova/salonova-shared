import { IBaseEntity } from './base';
export interface IStaff extends IBaseEntity {
    user_id: string;
    name: string;
    phone: string | null;
    email: string | null;
    avatar_url: string | null;
    specializations: string[];
    bio: string | null;
    is_active: boolean;
    commission_rate: number | null;
    schedule: IStaffSchedule;
}
export interface IStaffSchedule {
    [day: string]: {
        start: string;
        end: string;
        is_off: boolean;
        breaks?: {
            start: string;
            end: string;
        }[];
    };
}
export interface ICreateStaffDTO {
    user_id: string;
    name: string;
    phone?: string;
    email?: string;
    specializations?: string[];
    bio?: string;
    commission_rate?: number;
    schedule?: IStaffSchedule;
}
export interface IUpdateStaffDTO {
    name?: string;
    phone?: string;
    email?: string;
    avatar_url?: string;
    specializations?: string[];
    bio?: string;
    is_active?: boolean;
    commission_rate?: number;
    schedule?: IStaffSchedule;
}
