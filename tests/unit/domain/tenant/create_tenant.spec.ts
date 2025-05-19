import { test } from '@japa/runner'
import { CreateTenant } from '#domain/tenant/use_cases/create_tenant'
import { TenantInMemoryRepository } from '#infrastructure/repositories/in_memory/tenant_in_memory_repository'

test.group('CreateTenant UseCase', () => {
  test('should create a tenant', async ({ assert }) => {
    const tenantRepository = new TenantInMemoryRepository()
    const createTenant = new CreateTenant(tenantRepository)

    await createTenant.execute({ name: 'Tenant A', id: '1' })

    const tenant = await tenantRepository.findById('1')
    assert.isNotNull(tenant)
    assert.equal(tenant?.props.name, 'Tenant A')
  })

  test('should throw when name is invalid', async ({ assert }) => {
    const repo = new TenantInMemoryRepository()
    const createTenant = new CreateTenant(repo)

    await assert.rejects(() => createTenant.execute({ name: '', id: '2' }))
  })
})
