import { EventNames } from '../constants';
import { ITransaction } from './transaction';
import { IAppointment } from './appointment';
import { ISubscription } from './subscription';
import { IInventoryItem } from './inventory';
import { ICustomer } from './customer';
import { ISyncConflict } from './sync';

// ============================
// Event Payload Types
// ============================

export interface ITransactionEvent {
  event: typeof EventNames.TRANSACTION_CREATED | typeof EventNames.TRANSACTION_UPDATED | typeof EventNames.TRANSACTION_VOIDED;
  tenant_id: string;
  data: ITransaction;
}

export interface IAppointmentEvent {
  event: typeof EventNames.APPOINTMENT_CREATED | typeof EventNames.APPOINTMENT_UPDATED | typeof EventNames.APPOINTMENT_CANCELLED;
  tenant_id: string;
  data: IAppointment;
}

export interface ISubscriptionEvent {
  event: typeof EventNames.SUBSCRIPTION_CREATED | typeof EventNames.SUBSCRIPTION_UPDATED | typeof EventNames.SUBSCRIPTION_EXPIRED;
  tenant_id: string;
  data: ISubscription;
}

export interface ISyncEvent {
  event: typeof EventNames.SYNC_COMPLETED | typeof EventNames.SYNC_CONFLICT_RESOLVED;
  tenant_id: string;
  data: {
    records_uploaded?: number;
    records_downloaded?: number;
    conflicts?: ISyncConflict[];
  };
}

export interface IInventoryEvent {
  event: typeof EventNames.INVENTORY_LOW_STOCK | typeof EventNames.INVENTORY_UPDATED;
  tenant_id: string;
  data: IInventoryItem;
}

export interface ICustomerEvent {
  event: typeof EventNames.CUSTOMER_CREATED | typeof EventNames.CUSTOMER_UPDATED;
  tenant_id: string;
  data: ICustomer;
}

// Union type for all events
export type SalonovaEvent =
  | ITransactionEvent
  | IAppointmentEvent
  | ISubscriptionEvent
  | ISyncEvent
  | IInventoryEvent
  | ICustomerEvent;
