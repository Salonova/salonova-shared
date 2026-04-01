/**
 * Type used for runtime license and subscription status checks.
 * Even in an online-only model, we still verify these on app launch.
 */
export interface ISubscriptionSync {
    status: string;
    plan: string;
    expires_at: string;
    last_verified_at: string;
    should_block: boolean;
}
/**
 * Re-purposed to track general API connectivity status
 */
export interface IApiConnectionStatus {
    is_online: boolean;
    last_reached_at: string | null;
    last_error: string | null;
}
export interface ISyncConflict {
    entity_type: string;
    entity_id: string;
    local_data: any;
    server_data: any;
    resolved_data?: any;
}
