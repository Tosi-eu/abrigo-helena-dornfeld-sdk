/**
 * Entidades e tipos de usuário / login.
 */

export interface UserPermissions {
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
}

export interface LoggedUser {
  id: number;
  login: string;
  first_name?: string;
  last_name?: string;
  role?: "admin" | "user";
}

export interface Login {
  first_name?: string;
  last_name?: string;
  login: string;
  password: string;
}
