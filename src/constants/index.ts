// ============================
// Shared Constants
// ============================

export const SUBSCRIPTION_GRACE_PERIOD_DAYS = 3;
export const FORCE_SYNC_THRESHOLD_DAYS = 7;


export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show',
}

export enum TransactionStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  REFUNDED = 'refunded',
  VOIDED = 'voided',
}

export enum PaymentMethod {
  CASH = 'cash',
  CARD = 'card',
  MOBILE = 'mobile',
  OTHER = 'other',
}

export enum SubscriptionPlan {
  FREE = 'free',
  STARTER = 'starter',
  PROFESSIONAL = 'professional',
  ENTERPRISE = 'enterprise',
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  TRIAL = 'trial',
  PAST_DUE = 'past_due',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
}

// ============================
// RBAC
// ============================

export enum SystemPermission {
  POS_CREATE = 'pos.create',
  POS_REFUND = 'pos.refund',
  INVENTORY_READ = 'inventory.read',
  INVENTORY_UPDATE = 'inventory.update',
  CUSTOMERS_READ = 'customers.read',
  CUSTOMERS_CREATE = 'customers.create',
  REPORTS_VIEW = 'reports.view',
  STAFF_MANAGE = 'staff.manage',
}

export enum DefaultRoleName {
  OWNER = 'Owner',
  MANAGER = 'Manager',
  CASHIER = 'Cashier',
  STYLIST = 'Stylist',
}

// ============================
// Event Names
// ============================

export const EventNames = {
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
} as const;
