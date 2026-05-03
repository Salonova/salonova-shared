// ============================
// Base Entity Interface
// ============================

export interface IBaseEntity {
  id: string; // UUID
  tenant_id: string; // UUID
  branch_id: string | null; // UUID
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  deleted_at: string | null; // ISO 8601 or null (soft delete)
}

/** Extended base for offline-first local storage */
export interface ILocalBaseEntity extends IBaseEntity {
  is_synced: boolean;
}
