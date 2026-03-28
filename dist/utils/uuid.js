"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = generateUUID;
exports.isValidUUID = isValidUUID;
/**
 * Generates a UUID v4 string.
 * Uses crypto.randomUUID when available, falls back to manual generation.
 */
function generateUUID() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const g = typeof globalThis !== 'undefined' ? globalThis : {};
    if (g.crypto && typeof g.crypto.randomUUID === 'function') {
        return g.crypto.randomUUID();
    }
    // Fallback for environments without crypto.randomUUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Validates a UUID v4 string format.
 */
function isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}
