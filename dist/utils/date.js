"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nowISO = nowISO;
exports.compareTimestamps = compareTimestamps;
exports.isOlderThanDays = isOlderThanDays;
exports.isForceSyncRequired = isForceSyncRequired;
exports.isSubscriptionBlocked = isSubscriptionBlocked;
exports.getGracePeriodEnd = getGracePeriodEnd;
exports.addDays = addDays;
exports.doTimeRangesOverlap = doTimeRangesOverlap;
const constants_1 = require("../constants");
/**
 * Returns the current ISO 8601 datetime string.
 */
function nowISO() {
    return new Date().toISOString();
}
/**
 * Compares two ISO 8601 date strings for last-write-wins conflict resolution.
 * Returns positive if a is newer, negative if b is newer, 0 if equal.
 */
function compareTimestamps(a, b) {
    return new Date(a).getTime() - new Date(b).getTime();
}
/**
 * Checks if a date is older than the given number of days from now.
 */
function isOlderThanDays(dateStr, days) {
    const date = new Date(dateStr);
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - days);
    return date.getTime() < threshold.getTime();
}
/**
 * Checks if a sync is required based on last sync time.
 * Returns true if last sync is older than FORCE_SYNC_THRESHOLD_DAYS.
 */
function isForceSyncRequired(lastSyncAt) {
    if (!lastSyncAt)
        return true;
    return isOlderThanDays(lastSyncAt, constants_1.FORCE_SYNC_THRESHOLD_DAYS);
}
/**
 * Checks if a subscription should be blocked based on expiry and grace period.
 * Returns true if the subscription has expired AND the grace period has passed.
 */
function isSubscriptionBlocked(expiresAt) {
    const expiryDate = new Date(expiresAt);
    const gracePeriodEnd = new Date(expiryDate);
    gracePeriodEnd.setDate(gracePeriodEnd.getDate() + constants_1.SUBSCRIPTION_GRACE_PERIOD_DAYS);
    return new Date().getTime() > gracePeriodEnd.getTime();
}
/**
 * Returns the grace period end date for a subscription.
 */
function getGracePeriodEnd(expiresAt) {
    const expiryDate = new Date(expiresAt);
    expiryDate.setDate(expiryDate.getDate() + constants_1.SUBSCRIPTION_GRACE_PERIOD_DAYS);
    return expiryDate.toISOString();
}
/**
 * Adds days to a date string and returns an ISO string.
 */
function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toISOString();
}
/**
 * Checks if two time ranges overlap (for appointment conflict detection).
 */
function doTimeRangesOverlap(startA, endA, startB, endB) {
    const a0 = new Date(startA).getTime();
    const a1 = new Date(endA).getTime();
    const b0 = new Date(startB).getTime();
    const b1 = new Date(endB).getTime();
    return a0 < b1 && b0 < a1;
}
