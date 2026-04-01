import { IBaseEntity } from './base';
export interface IPermission {
    id: string;
    name: string;
    description: string;
    module: string;
    action: string;
}
export interface IRole extends IBaseEntity {
    name: string;
    description: string | null;
    permissions?: IPermission[];
}
export interface IRolePermission {
    role_id: string;
    permission_id: string;
}
export interface IUserRole {
    id: string;
    user_id: string;
    role_id: string;
    branch_id: string | null;
    role?: IRole;
}
export interface ICreateRoleDTO {
    name: string;
    description?: string;
    permission_ids: string[];
}
export interface IUpdateRoleDTO {
    name?: string;
    description?: string;
    permission_ids?: string[];
}
export interface IAssignRolesDTO {
    role_ids: string[];
    branch_id?: string;
}
