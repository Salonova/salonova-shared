/**
 * Returns the current ISO 8601 datetime string.
 */
export declare function nowISO(): string;
/**
 * Compares two ISO 8601 date strings for last-write-wins conflict resolution.
 * Returns positive if a is newer, negative if b is newer, 0 if equal.
 */
export declare function compareTimestamps(a: string, b: string): number;
/**
 * Checks if a date is older than the given number of days from now.
 */
export declare function isOlderThanDays(dateStr: string, days: number): boolean;
/**
 * Checks if a sync is required based on last sync time.
 * Returns true if last sync is older than FORCE_SYNC_THRESHOLD_DAYS.
 */
export declare function isForceSyncRequired(lastSyncAt: string | null): boolean;
/**
 * Checks if a subscription should be blocked based on expiry and grace period.
 * Returns true if the subscription has expired AND the grace period has passed.
 */
export declare function isSubscriptionBlocked(expiresAt: string): boolean;
/**
 * Returns the grace period end date for a subscription.
 */
export declare function getGracePeriodEnd(expiresAt: string): string;
/**
 * Adds days to a date string and returns an ISO string.
 */
export declare function addDays(dateStr: string, days: number): string;
/**
 * Checks if two time ranges overlap (for appointment conflict detection).
 */
export declare function doTimeRangesOverlap(startA: string, endA: string, startB: string, endB: string): boolean;
