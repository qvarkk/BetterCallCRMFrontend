export interface ApiError {
  message: string;
  status: number;
  code: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiMessage {
  message: string;
  code: number;
}

export interface PaginationLinks {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface PaginationMetaLink {
  url: string;
  label: string;
  page: number;
  active: boolean;
}

export interface PaginatedApiResponse<T> {
  data: T[];
  status: number;
  links: PaginationLinks;
  meta: PaginationMeta;
}