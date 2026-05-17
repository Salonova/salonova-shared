import { IBaseEntity } from './base';

export interface ISupplier extends IBaseEntity {
  name: string;
  contact_person: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  tax_number: string | null;
  notes: string | null;
  is_active: boolean;
}

export interface ICreateSupplierDTO {
  name: string;
  contact_person?: string;
  phone?: string;
  email?: string;
  address?: string;
  tax_number?: string;
  notes?: string;
}

export interface IUpdateSupplierDTO extends Partial<ICreateSupplierDTO> {
  is_active?: boolean;
}

export type PurchaseOrderStatus = 'draft' | 'ordered' | 'partially_received' | 'received' | 'cancelled';
export type PurchaseOrderPaymentStatus = 'unpaid' | 'partially_paid' | 'paid';

export interface IPurchaseOrderItem extends IBaseEntity {
  purchase_order_id: string;
  inventory_id: string;
  sku: string | null;
  product_name: string;
  unit_cost: number;
  quantity_ordered: number;
  quantity_received: number;
  line_total: number;
}

export interface IPurchaseOrder extends IBaseEntity {
  branch_id: string;
  supplier_id: string;
  supplier?: ISupplier;
  items?: IPurchaseOrderItem[];
  po_number: string;
  status: PurchaseOrderStatus;
  payment_status: PurchaseOrderPaymentStatus;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  notes: string | null;
  ordered_at: Date | string | null;
  received_at: Date | string | null;
  created_by: string | null;
}

export interface ICreatePurchaseOrderDTO {
  supplier_id: string;
  branch_id: string;
  notes?: string;
  items: Array<{
    inventory_id: string;
    unit_cost: number;
    quantity_ordered: number;
  }>;
}

export interface IUpdatePurchaseOrderDTO {
  supplier_id?: string;
  notes?: string;
  items?: Array<{
    inventory_id: string;
    unit_cost: number;
    quantity_ordered: number;
  }>;
}

export interface IReceivePurchaseOrderDTO {
  items: Array<{
    purchase_order_item_id: string;
    quantity_received: number;
  }>;
  notes?: string;
  invoice_number?: string;
}
