import { test } from '@japa/runner'
import { TenantInMemoryRepository } from '#infrastructure/repositories/in_memory/tenant_in_memory_repository'
import { GetAllTenants } from '#domain/tenant/use_cases/getall_tenants'
import { CreateTenant } from '#domain/tenant/use_cases/create_tenant'

test.group('GetAllTenants UseCase', () => {
  test('should return all tenants', async ({ assert }) => {
    const tenantRepository = new TenantInMemoryRepository()
    const createTenant = new CreateTenant(tenantRepository)
    const getAllTenants = new GetAllTenants(tenantRepository)

    await createTenant.execute({ id: '1', name: 'Tenant A' })
    await createTenant.execute({ id: '2', name: 'Tenant B' })

    const tenants = await getAllTenants.execute()
    console.log(tenants)

    assert.lengthOf(tenants, 2)
    assert.equal(tenants[0].props.name, 'Tenant A')
    assert.equal(tenants[1].props.name, 'Tenant B')
  })

  // test('should return empty array if no tenants', async ({ assert }) => {
  //   const tenantRepository = new TenantInMemoryRepository()
  //   const getAllTenants = new GetAllTenants(tenantRepository)

  //   const tenants = await getAllTenants.execute()

  //   assert.isArray(tenants)
  //   assert.lengthOf(tenants, 0)
  // })
})
