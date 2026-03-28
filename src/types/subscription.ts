import { IBaseEntity } from './base';
import { SubscriptionPlan, SubscriptionStatus } from '../constants';

export interface ISubscription extends Omit<IBaseEntity, 'tenant_id'> {
  tenant_id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  starts_at: string; // ISO 8601
  expires_at: string; // ISO 8601
  last_verified_at: string; // ISO 8601
  max_staff: number;
  max_customers: number;
  features: string[];
  payment_reference: string | null;
}

/** Local subscription data for offline enforcement */
export interface ILocalSubscription {
  tenant_id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  expires_at: string;
  last_verified_at: string;
}

// DTOs
export interface ICreateSubscriptionDTO {
  tenant_id: string;
  plan: SubscriptionPlan;
  starts_at: string;
  expires_at: string;
  payment_reference?: string;
}

export interface IUpdateSubscriptionDTO {
  plan?: SubscriptionPlan;
  status?: SubscriptionStatus;
  expires_at?: string;
  payment_reference?: string;
}

export interface IValidateSubscriptionResponse {
  is_valid: boolean;
  status: SubscriptionStatus;
  expires_at: string;
  grace_period_ends_at: string | null;
  should_block: boolean;
}
