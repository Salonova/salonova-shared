import { IBaseEntity } from './base';

export interface IInventoryItem extends IBaseEntity {
  name: string;
  description: string | null;
  sku: string | null;
  category: string | null;
  type: 'product' | 'service';
  price: number;
  cost: number | null;
  quantity: number; // 0 for services
  low_stock_threshold: number | null;
  is_active: boolean;
  duration_minutes: number | null; // for services
  image_url: string | null;
}

// DTOs
export interface ICreateInventoryItemDTO {
  name: string;
  description?: string;
  sku?: string;
  category?: string;
  type: 'product' | 'service';
  price: number;
  cost?: number;
  quantity?: number;
  low_stock_threshold?: number;
  duration_minutes?: number;
}

export interface IUpdateInventoryItemDTO {
  name?: string;
  description?: string;
  sku?: string;
  category?: string;
  price?: number;
  cost?: number;
  quantity?: number;
  low_stock_threshold?: number;
  is_active?: boolean;
  duration_minutes?: number;
  image_url?: string;
}
