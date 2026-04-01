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
function nowISO() {
    return new Date().toISOString();
}
function compareTimestamps(a, b) {
    return new Date(a).getTime() - new Date(b).getTime();
}
function isOlderThanDays(dateStr, days) {
    const date = new Date(dateStr);
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - days);
    return date.getTime() < threshold.getTime();
}
function isForceSyncRequired(lastSyncAt) {
    if (!lastSyncAt)
        return true;
    return isOlderThanDays(lastSyncAt, constants_1.FORCE_SYNC_THRESHOLD_DAYS);
}
function isSubscriptionBlocked(expiresAt) {
    const expiryDate = new Date(expiresAt);
    const gracePeriodEnd = new Date(expiryDate);
    gracePeriodEnd.setDate(gracePeriodEnd.getDate() + constants_1.SUBSCRIPTION_GRACE_PERIOD_DAYS);
    return new Date().getTime() > gracePeriodEnd.getTime();
}
function getGracePeriodEnd(expiresAt) {
    const expiryDate = new Date(expiresAt);
    expiryDate.setDate(expiryDate.getDate() + constants_1.SUBSCRIPTION_GRACE_PERIOD_DAYS);
    return expiryDate.toISOString();
}
function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toISOString();
}
function doTimeRangesOverlap(startA, endA, startB, endB) {
    const a0 = new Date(startA).getTime();
    const a1 = new Date(endA).getTime();
    const b0 = new Date(startB).getTime();
    const b1 = new Date(endB).getTime();
    return a0 < b1 && b0 < a1;
}
//# sourceMappingURL=date.js.map