export interface IBaseEntity {
    id: string;
    tenant_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}
/** Extended base for offline-first local storage */
export interface ILocalBaseEntity extends IBaseEntity {
    is_synced: boolean;
}
