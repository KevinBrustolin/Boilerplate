import { Tenant } from '#domain/tenant/tenant'

export abstract class TenantRepository {
  abstract create(tenant: Tenant): Promise<Tenant>
  abstract findById(id: string): Promise<Tenant | null>
  abstract getAll(): Promise<Tenant[]>
}
