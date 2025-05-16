import { Tenant } from '#domain/tenant/tenant'

export interface TenantRepository {
  create(tenant: Tenant): Promise<void>
  findById(id: string): Promise<Tenant | null>
}
