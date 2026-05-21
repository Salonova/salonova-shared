"use strict";
// ============================
// Shared Constants
// ============================
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNames = exports.DefaultRoleName = exports.SystemPermission = exports.SubscriptionStatus = exports.SubscriptionPlan = exports.PaymentMethod = exports.TransactionStatus = exports.AppointmentStatus = exports.FORCE_SYNC_THRESHOLD_DAYS = exports.SUBSCRIPTION_GRACE_PERIOD_DAYS = void 0;
exports.SUBSCRIPTION_GRACE_PERIOD_DAYS = 3;
exports.FORCE_SYNC_THRESHOLD_DAYS = 7;
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
    SubscriptionPlan["GROWTH"] = "growth";
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
// ============================
// RBAC
// ============================
var SystemPermission;
(function (SystemPermission) {
    SystemPermission["POS_CREATE"] = "pos.create";
    SystemPermission["POS_REFUND"] = "pos.refund";
    SystemPermission["INVENTORY_READ"] = "inventory.read";
    SystemPermission["INVENTORY_UPDATE"] = "inventory.update";
    SystemPermission["CUSTOMERS_READ"] = "customers.read";
    SystemPermission["CUSTOMERS_CREATE"] = "customers.create";
    SystemPermission["REPORTS_VIEW"] = "reports.view";
    SystemPermission["STAFF_MANAGE"] = "staff.manage";
    SystemPermission["ACCOUNTS_READ"] = "accounts.read";
    SystemPermission["PAYROLL_MANAGE"] = "payroll.manage";
})(SystemPermission || (exports.SystemPermission = SystemPermission = {}));
var DefaultRoleName;
(function (DefaultRoleName) {
    DefaultRoleName["OWNER"] = "Owner";
    DefaultRoleName["MANAGER"] = "Manager";
    DefaultRoleName["CASHIER"] = "Cashier";
    DefaultRoleName["STYLIST"] = "Stylist";
})(DefaultRoleName || (exports.DefaultRoleName = DefaultRoleName = {}));
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
