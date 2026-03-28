// ============================
// API Response Types
// ============================

export interface IApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface IApiErrorResponse {
  success: false;
  message: string;
  error?: string;
  statusCode: number;
}

export interface IPaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface IPaginationQuery {
  page?: number;
  limit?: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  search?: string;
}
