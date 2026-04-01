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
  payment_method: PaymentMethod;
  status: TransactionStatus;
  notes: string | null;
  receipt_number: string;
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
  status: string;
  receipt_number: string;
  notes?: string;
}

export interface IUpdateTransactionDTO {
  status?: TransactionStatus;
  notes?: string;
}
