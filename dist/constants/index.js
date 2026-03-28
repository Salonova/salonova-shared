"use strict";
// ============================
// Shared Constants
// ============================
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNames = exports.SYNCABLE_TABLES = exports.SYNC_BATCH_SIZE = exports.SUBSCRIPTION_GRACE_PERIOD_DAYS = exports.FORCE_SYNC_THRESHOLD_DAYS = exports.SYNC_INTERVAL_MS = exports.SyncOperation = exports.SubscriptionStatus = exports.SubscriptionPlan = exports.PaymentMethod = exports.TransactionStatus = exports.AppointmentStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "super_admin";
    UserRole["ADMIN"] = "admin";
    UserRole["STAFF"] = "staff";
    UserRole["CUSTOMER"] = "customer";
})(UserRole || (exports.UserRole = UserRole = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["IN_PROGRESS"] = "in_progress";
    AppointmentStatus["COMPLETED"] = "completed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["NO_SHOW"] = "no_show";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["COMPLETED"] = "completed";
    TransactionStatus["REFUNDED"] = "refunded";
    TransactionStatus["VOIDED"] = "voided";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "cash";
    PaymentMethod["CARD"] = "card";
    PaymentMethod["MOBILE"] = "mobile";
    PaymentMethod["OTHER"] = "other";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var SubscriptionPlan;
(function (SubscriptionPlan) {
    SubscriptionPlan["FREE"] = "free";
    SubscriptionPlan["STARTER"] = "starter";
    SubscriptionPlan["PROFESSIONAL"] = "professional";
    SubscriptionPlan["ENTERPRISE"] = "enterprise";
})(SubscriptionPlan || (exports.SubscriptionPlan = SubscriptionPlan = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["ACTIVE"] = "active";
    SubscriptionStatus["TRIAL"] = "trial";
    SubscriptionStatus["PAST_DUE"] = "past_due";
    SubscriptionStatus["EXPIRED"] = "expired";
    SubscriptionStatus["CANCELLED"] = "cancelled";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
var SyncOperation;
(function (SyncOperation) {
    SyncOperation["INSERT"] = "INSERT";
    SyncOperation["UPDATE"] = "UPDATE";
    SyncOperation["DELETE"] = "DELETE";
})(SyncOperation || (exports.SyncOperation = SyncOperation = {}));
// ============================
// Sync Constants
// ============================
/** Sync interval in milliseconds (5 minutes) */
exports.SYNC_INTERVAL_MS = 5 * 60 * 1000;
/** Force sync threshold in days */
exports.FORCE_SYNC_THRESHOLD_DAYS = 4;
/** Grace period for subscription in days */
exports.SUBSCRIPTION_GRACE_PERIOD_DAYS = 3;
/** Batch size for sync uploads */
exports.SYNC_BATCH_SIZE = 100;
// ============================
// Syncable Table Names
// ============================
exports.SYNCABLE_TABLES = [
    'customers',
    'staff',
    'appointments',
    'transactions',
    'inventory',
];
// ============================
// Event Names
// ============================
exports.EventNames = {
    // Transaction events
    TRANSACTION_CREATED: 'transaction.created',
    TRANSACTION_UPDATED: 'transaction.updated',
    TRANSACTION_VOIDED: 'transaction.voided',
    // Appointment events
    APPOINTMENT_CREATED: 'appointment.created',
    APPOINTMENT_UPDATED: 'appointment.updated',
    APPOINTMENT_CANCELLED: 'appointment.cancelled',
    // Subscription events
    SUBSCRIPTION_CREATED: 'subscription.created',
    SUBSCRIPTION_UPDATED: 'subscription.updated',
    SUBSCRIPTION_EXPIRED: 'subscription.expired',
    // Sync events
    SYNC_COMPLETED: 'sync.completed',
    SYNC_CONFLICT_RESOLVED: 'sync.conflict_resolved',
    // Inventory events
    INVENTORY_LOW_STOCK: 'inventory.low_stock',
    INVENTORY_UPDATED: 'inventory.updated',
    // Customer events
    CUSTOMER_CREATED: 'customer.created',
    CUSTOMER_UPDATED: 'customer.updated',
};
