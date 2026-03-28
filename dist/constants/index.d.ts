export declare enum UserRole {
    SUPER_ADMIN = "super_admin",
    ADMIN = "admin",
    STAFF = "staff",
    CUSTOMER = "customer"
}
export declare enum AppointmentStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    NO_SHOW = "no_show"
}
export declare enum TransactionStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    REFUNDED = "refunded",
    VOIDED = "voided"
}
export declare enum PaymentMethod {
    CASH = "cash",
    CARD = "card",
    MOBILE = "mobile",
    OTHER = "other"
}
export declare enum SubscriptionPlan {
    FREE = "free",
    STARTER = "starter",
    PROFESSIONAL = "professional",
    ENTERPRISE = "enterprise"
}
export declare enum SubscriptionStatus {
    ACTIVE = "active",
    TRIAL = "trial",
    PAST_DUE = "past_due",
    EXPIRED = "expired",
    CANCELLED = "cancelled"
}
export declare enum SyncOperation {
    INSERT = "INSERT",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
/** Sync interval in milliseconds (5 minutes) */
export declare const SYNC_INTERVAL_MS: number;
/** Force sync threshold in days */
export declare const FORCE_SYNC_THRESHOLD_DAYS = 4;
/** Grace period for subscription in days */
export declare const SUBSCRIPTION_GRACE_PERIOD_DAYS = 3;
/** Batch size for sync uploads */
export declare const SYNC_BATCH_SIZE = 100;
export declare const SYNCABLE_TABLES: readonly ["customers", "staff", "appointments", "transactions", "inventory"];
export type SyncableTable = (typeof SYNCABLE_TABLES)[number];
export declare const EventNames: {
    readonly TRANSACTION_CREATED: "transaction.created";
    readonly TRANSACTION_UPDATED: "transaction.updated";
    readonly TRANSACTION_VOIDED: "transaction.voided";
    readonly APPOINTMENT_CREATED: "appointment.created";
    readonly APPOINTMENT_UPDATED: "appointment.updated";
    readonly APPOINTMENT_CANCELLED: "appointment.cancelled";
    readonly SUBSCRIPTION_CREATED: "subscription.created";
    readonly SUBSCRIPTION_UPDATED: "subscription.updated";
    readonly SUBSCRIPTION_EXPIRED: "subscription.expired";
    readonly SYNC_COMPLETED: "sync.completed";
    readonly SYNC_CONFLICT_RESOLVED: "sync.conflict_resolved";
    readonly INVENTORY_LOW_STOCK: "inventory.low_stock";
    readonly INVENTORY_UPDATED: "inventory.updated";
    readonly CUSTOMER_CREATED: "customer.created";
    readonly CUSTOMER_UPDATED: "customer.updated";
};
