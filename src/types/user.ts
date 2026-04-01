import { IBaseEntity } from './base';

export interface IUser extends IBaseEntity {
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  avatar_url: string | null;
  is_active: boolean;
  last_login_at: string | null;
}

// DTOs
export interface ICreateUserDTO {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
  tenant_id: string;
}

export interface IUpdateUserDTO {
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  avatar_url?: string;
  is_active?: boolean;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
  user: Omit<IUser, 'password_hash'> & {
    roles: string[];
    permissions: string[];
  };
}

export interface ITokenPayload {
  sub: string; // user id
  email: string;
  tenant_id: string;
  roles: string[];
  permissions: string[];
  iat?: number;
  exp?: number;
}
