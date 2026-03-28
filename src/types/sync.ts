import { SyncOperation, SyncableTable } from '../constants';

// ============================
// Sync Log
// ============================

export interface ISyncLog {
  id: string; // UUID
  tenant_id: string;
  table_name: SyncableTable;
  record_id: string;
  operation: SyncOperation;
  payload: Record<string, unknown>;
  created_at: string; // ISO 8601
  synced: boolean;
}

// ============================
// Sync Upload (Client → Server)
// ============================

export interface ISyncUploadPayload {
  tenant_id: string;
  device_id: string;
  last_sync_at: string | null; // ISO 8601
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

// ============================
// Sync Download (Server → Client)
// ============================

export interface ISyncDownloadRequest {
  tenant_id: string;
  last_sync_at: string | null; // ISO 8601
  tables?: SyncableTable[]; // optional filter
}

export interface ISyncDownloadResponse {
  server_time: string; // ISO 8601 — use as next last_sync_at
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

// ============================
// Subscription Sync Validation
// ============================

export interface ISubscriptionSync {
  status: string;
  plan: string;
  expires_at: string;
  last_verified_at: string;
  should_block: boolean;
}

// ============================
// Sync Status
// ============================

export interface ISyncStatus {
  last_sync_at: string | null;
  pending_uploads: number;
  is_syncing: boolean;
  last_error: string | null;
}

// ============================
// Conflict Resolution
// ============================

export interface ISyncConflict {
  table_name: SyncableTable;
  record_id: string;
  local_updated_at: string;
  server_updated_at: string;
  resolution: 'local_wins' | 'server_wins';
}
