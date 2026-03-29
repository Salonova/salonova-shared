// ============================
// Subscription Sync Verification
// ============================

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

// ============================
// Sync Status (Network Status)
// ============================

/**
 * Re-purposed to track general API connectivity status
 */
export interface IApiConnectionStatus {
  is_online: boolean;
  last_reached_at: string | null;
  last_error: string | null;
}
