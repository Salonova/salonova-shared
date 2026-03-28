/**
 * Generates a UUID v4 string.
 * Uses crypto.randomUUID when available, falls back to manual generation.
 */
export declare function generateUUID(): string;
/**
 * Validates a UUID v4 string format.
 */
export declare function isValidUUID(uuid: string): boolean;
