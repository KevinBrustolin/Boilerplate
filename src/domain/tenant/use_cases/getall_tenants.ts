import { TenantRepository } from '#domain/tenant/tenant_repository'
import { inject } from '@adonisjs/core'

@inject()
export class GetAllTenants {
  constructor(private tenantRepository: TenantRepository) {}

  async execute() {
    return await this.tenantRepository.getAll()
  }
}
