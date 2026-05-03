import { IBaseEntity } from './base';
export interface IInventoryItem extends IBaseEntity {
    name: string;
    description: string | null;
    sku: string | null;
    category: string | null;
    type: 'product' | 'service';
    price: number;
    cost: number | null;
    quantity: number;
    low_stock_threshold: number | null;
    is_active: boolean;
    duration_minutes: number | null;
    image_url: string | null;
    branch_ids: string[];
}
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
    branch_ids?: string[];
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
    branch_ids?: string[];
}
