import { Tenant } from '#domain/tenant/tenant'
import { TenantRepository } from '#domain/tenant/tenant_repository'

export class TenantInMemoryRepository implements TenantRepository {
  #tenants: Tenant[] = [] // FIXME: persistence HTTP
  async create(tenant: Tenant): Promise<Tenant> {
    this.#tenants.push(tenant)
    return tenant
  }

  async findById(id: string): Promise<Tenant | null> {
    const tenant = this.#tenants.find((t) => t.props.id === id)
    return tenant || null
  }

  getAll(): Promise<Tenant[]> {
    return Promise.resolve(this.#tenants)
  }
}
