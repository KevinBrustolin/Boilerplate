import { Tenant } from '#domain/tenant/tenant'
import { TenantRepository } from '#domain/tenant/tenant_repository'

export class TenantInMemoryRepository implements TenantRepository {
  private tenants: Tenant[] = []

  async create(tenant: Tenant): Promise<void> {
    this.tenants.push(tenant)
  }

  async findById(id: string): Promise<Tenant | null> {
    const tenant = this.tenants.find((t) => t.props.id === id)
    return tenant || null
  }
}
