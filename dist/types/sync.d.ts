import { SyncOperation, SyncableTable } from '../constants';
export interface ISyncLog {
    id: string;
    tenant_id: string;
    table_name: SyncableTable;
    record_id: string;
    operation: SyncOperation;
    payload: Record<string, unknown>;
    created_at: string;
    synced: boolean;
}
export interface ISyncUploadPayload {
    tenant_id: string;
    device_id: string;
    last_sync_at: string | null;
    logs: ISyncUploadRecord[];
}
export interface ISyncUploadRecord {
    id: string;
    table_name: SyncableTable;
    record_id: string;
    operation: SyncOperation;
    payload: Record<string, unknown>;
    created_at: string;
    updated_at: string;
}
export interface ISyncDownloadRequest {
    tenant_id: string;
    last_sync_at: string | null;
    tables?: SyncableTable[];
}
export interface ISyncDownloadResponse {
    server_time: string;
    changes: ISyncTableChanges[];
    subscription: ISubscriptionSync | null;
}
export interface ISyncTableChanges {
    table_name: SyncableTable;
    records: ISyncRecord[];
}
export interface ISyncRecord {
    id: string;
    operation: SyncOperation;
    data: Record<string, unknown>;
    updated_at: string;
}
export interface ISubscriptionSync {
    status: string;
    plan: string;
    expires_at: string;
    last_verified_at: string;
    should_block: boolean;
}
export interface ISyncStatus {
    last_sync_at: string | null;
    pending_uploads: number;
    is_syncing: boolean;
    last_error: string | null;
}
export interface ISyncConflict {
    table_name: SyncableTable;
    record_id: string;
    local_updated_at: string;
    server_updated_at: string;
    resolution: 'local_wins' | 'server_wins';
}
