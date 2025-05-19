// import type { HttpContext } from '@adonisjs/core/http'

import { CreateTenant } from '#domain/tenant/use_cases/create_tenant'
import { inject } from '@adonisjs/core'

@inject()
export default class CreateTenantController {
  constructor(private createTenant: CreateTenant) {}

  handle() {
    return this.createTenant.execute({ id: 'ewgwrs', name: 'Toto' })
  }
}
