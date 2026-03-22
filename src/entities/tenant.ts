export type PublicTenantListItem = {
  id: number;
  slug: string;
  name: string;
  brandName: string | null;
};

export type PublicTenantBranding = {
  slug: string;
  name: string;
  brandName: string | null;
  logoUrl: string | null;
  requiresContractCode: true;
  contractCodeMandatory?: boolean;
};

export type TenantBrandingApiResponse =
  | { found: false }
  | {
      found: true;
      slug: string;
      name: string;
      brandName: string | null;
      logoUrl?: string | null;
      requiresContractCode?: boolean;
      contractCodeMandatory?: boolean;
    };

export type TenantProfile = {
  id: number;
  slug: string;
  name: string;
  brandName: string | null;
  logoUrl: string | null;
};

export type TenantModulesConfig = {
  enabled: string[];
};

export type TenantConfigResponse = {
  tenantId: number;
  tenant: TenantProfile | null;
  modules: TenantModulesConfig;
  modulesConfigured?: boolean;
  onboardingComplete?: boolean;
};

export type UpdateTenantBrandingPayload = {
  brandName: string | null;
  logoUrl?: string | null;
};
