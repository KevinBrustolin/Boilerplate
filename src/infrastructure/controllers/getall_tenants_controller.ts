// import type { HttpContext } from '@adonisjs/core/http'

import { GetAllTenants } from '#domain/tenant/use_cases/getall_tenants'
import { inject } from '@adonisjs/core'

@inject()
export default class GetAllTenantsController {
  constructor(private getAllTenants: GetAllTenants) {}

  handle() {
    return this.getAllTenants.execute()
  }
}
