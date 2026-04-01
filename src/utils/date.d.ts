export declare function nowISO(): string;
export declare function compareTimestamps(a: string, b: string): number;
export declare function isOlderThanDays(dateStr: string, days: number): boolean;
export declare function isForceSyncRequired(lastSyncAt: string | null): boolean;
export declare function isSubscriptionBlocked(expiresAt: string): boolean;
export declare function getGracePeriodEnd(expiresAt: string): string;
export declare function addDays(dateStr: string, days: number): string;
export declare function doTimeRangesOverlap(startA: string, endA: string, startB: string, endB: string): boolean;
