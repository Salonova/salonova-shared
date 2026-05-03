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
  commission_rate: number | null; // percentage
  schedule: IStaffSchedule;
  branch_ids: string[];
}

export interface IStaffSchedule {
  [day: string]: {
    start: string; // HH:mm
    end: string; // HH:mm
    is_off: boolean;
    breaks?: { start: string; end: string }[];
  };
}

// DTOs
export interface ICreateStaffDTO {
  user_id: string;
  name: string;
  phone?: string;
  email?: string;
  specializations?: string[];
  bio?: string;
  commission_rate?: number;
  schedule?: IStaffSchedule;
  branch_ids?: string[];
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
  branch_ids?: string[];
}
