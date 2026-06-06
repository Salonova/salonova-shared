export declare const SUBSCRIPTION_GRACE_PERIOD_DAYS = 3;
export declare const FORCE_SYNC_THRESHOLD_DAYS = 7;
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
    GROWTH = "growth",
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
export declare enum SystemPermission {
    POS_CREATE = "pos.create",
    POS_REFUND = "pos.refund",
    POS_VOID = "pos.void",
    INVENTORY_READ = "inventory.read",
    INVENTORY_UPDATE = "inventory.update",
    CUSTOMERS_READ = "customers.read",
    CUSTOMERS_CREATE = "customers.create",
    REPORTS_VIEW = "reports.view",
    STAFF_MANAGE = "staff.manage",
    ACCOUNTS_READ = "accounts.read",
    PAYROLL_MANAGE = "payroll.manage"
}
export declare enum DefaultRoleName {
    OWNER = "Owner",
    MANAGER = "Manager",
    CASHIER = "Cashier",
    STYLIST = "Stylist"
}
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
