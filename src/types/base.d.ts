export interface IBaseEntity {
    id: string;
    tenant_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}
export interface ILocalBaseEntity extends IBaseEntity {
    is_synced: boolean;
}
