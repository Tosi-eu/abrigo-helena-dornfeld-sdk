export interface PaginatedResponse<T> {
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
  hasNext?: boolean;
}

export interface AdminMetricsResponse {
  movementsThisMonth: number;
  activeUsersThisMonth: number;
}

export interface AdminActiveUserThisMonth {
  id: number;
  login: string;
  first_name: string | null;
  last_name: string | null;
  last_login_at: string;
  logins_count: number;
}
