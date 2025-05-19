import { Tenant } from '#domain/tenant/tenant'
import { TenantRepository } from '#domain/tenant/tenant_repository'
import { inject } from '@adonisjs/core'

@inject()
export class CreateTenant {
  constructor(private tenantRepository: TenantRepository) {}

  async execute(data: Tenant['props']) {
    const tenant = new Tenant(data)
    tenant.validate()
    return await this.tenantRepository.create(tenant)
  }
}
