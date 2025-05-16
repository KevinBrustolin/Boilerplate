// TODO: injection
import { Tenant } from '#domain/tenant/tenant'
import { TenantRepository } from '#domain/tenant/tenant_repository'

export class CreateTenant {
  constructor(private tenantRepo: TenantRepository) {}

  async execute(data: Tenant['props']) {
    const tenant = new Tenant(data)
    tenant.validate()
    await this.tenantRepo.create(tenant)
  }
}
