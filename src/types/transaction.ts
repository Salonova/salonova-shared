import { IBaseEntity } from './base';
import { TransactionStatus, PaymentMethod } from '../constants';

export interface ITransaction extends IBaseEntity {
  customer_id: string | null;
  staff_id: string | null;
  items: ITransactionItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  payment_method: PaymentMethod | string;
  status: TransactionStatus;
  notes: string | null;
  receipt_number: string;
  amount_paid: number;
  balance_due: number;
  payment_status: 'unpaid' | 'partial' | 'paid';
  due_date?: string | null;
}

export interface ITransactionPayment extends IBaseEntity {
  transaction_id: string;
  amount: number;
  payment_method: string;
  reference?: string | null;
  notes?: string | null;
  staff_id?: string | null;
}

export interface ITransactionItem {
  id?: string;
  name: string;
  type: 'service' | 'product';
  quantity: number;
  unit_price: number;
  total: number;
  inventory_id?: string | null;
  staff_id?: string | null;
  material_cost?: number;
  material_cost_percentage?: number;
  material_cost_total?: number;
  estimated_gross_profit?: number;
}

// DTOs
export interface ICreateTransactionDTO {
  customer_id?: string;
  staff_id?: string;
  items: ITransactionItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  payment_method: string;
  status?: string;
  receipt_number?: string;
  due_date?: string;
  split_payments?: { method: string; amount: number; reference?: string; note?: string }[];
  notes?: string;
}

export interface IUpdateTransactionDTO {
  status?: TransactionStatus;
  notes?: string;
}
