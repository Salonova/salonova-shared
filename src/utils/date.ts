import { SUBSCRIPTION_GRACE_PERIOD_DAYS, FORCE_SYNC_THRESHOLD_DAYS } from '../constants';

/**
 * Returns the current ISO 8601 datetime string.
 */
export function nowISO(): string {
  return new Date().toISOString();
}

/**
 * Compares two ISO 8601 date strings for last-write-wins conflict resolution.
 * Returns positive if a is newer, negative if b is newer, 0 if equal.
 */
export function compareTimestamps(a: string, b: string): number {
  return new Date(a).getTime() - new Date(b).getTime();
}

/**
 * Checks if a date is older than the given number of days from now.
 */
export function isOlderThanDays(dateStr: string, days: number): boolean {
  const date = new Date(dateStr);
  const threshold = new Date();
  threshold.setDate(threshold.getDate() - days);
  return date.getTime() < threshold.getTime();
}

/**
 * Checks if a sync is required based on last sync time.
 * Returns true if last sync is older than FORCE_SYNC_THRESHOLD_DAYS.
 */
export function isForceSyncRequired(lastSyncAt: string | null): boolean {
  if (!lastSyncAt) return true;
  return isOlderThanDays(lastSyncAt, FORCE_SYNC_THRESHOLD_DAYS);
}

/**
 * Checks if a subscription should be blocked based on expiry and grace period.
 * Returns true if the subscription has expired AND the grace period has passed.
 */
export function isSubscriptionBlocked(expiresAt: string): boolean {
  const expiryDate = new Date(expiresAt);
  const gracePeriodEnd = new Date(expiryDate);
  gracePeriodEnd.setDate(gracePeriodEnd.getDate() + SUBSCRIPTION_GRACE_PERIOD_DAYS);
  return new Date().getTime() > gracePeriodEnd.getTime();
}

/**
 * Returns the grace period end date for a subscription.
 */
export function getGracePeriodEnd(expiresAt: string): string {
  const expiryDate = new Date(expiresAt);
  expiryDate.setDate(expiryDate.getDate() + SUBSCRIPTION_GRACE_PERIOD_DAYS);
  return expiryDate.toISOString();
}

/**
 * Adds days to a date string and returns an ISO string.
 */
export function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

/**
 * Checks if two time ranges overlap (for appointment conflict detection).
 */
export function doTimeRangesOverlap(
  startA: string,
  endA: string,
  startB: string,
  endB: string,
): boolean {
  const a0 = new Date(startA).getTime();
  const a1 = new Date(endA).getTime();
  const b0 = new Date(startB).getTime();
  const b1 = new Date(endB).getTime();
  return a0 < b1 && b0 < a1;
}
