import { IBaseEntity } from './base';
import { AppointmentStatus } from '../constants';
export interface IAppointment extends IBaseEntity {
    customer_id: string;
    staff_id: string;
    service_name: string;
    service_price: number;
    start_time: string;
    end_time: string;
    duration_minutes: number;
    status: AppointmentStatus;
    notes: string | null;
    cancellation_reason: string | null;
}
export interface ICreateAppointmentDTO {
    customer_id: string;
    staff_id: string;
    service_name: string;
    service_price: number;
    start_time: string;
    end_time: string;
    duration_minutes: number;
    notes?: string;
}
export interface IUpdateAppointmentDTO {
    staff_id?: string;
    service_name?: string;
    service_price?: number;
    start_time?: string;
    end_time?: string;
    duration_minutes?: number;
    status?: AppointmentStatus;
    notes?: string;
    cancellation_reason?: string;
}
export interface ITimeSlot {
    start_time: string;
    end_time: string;
    staff_id: string;
    is_available: boolean;
}
