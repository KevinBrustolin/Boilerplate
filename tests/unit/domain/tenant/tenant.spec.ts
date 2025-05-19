import { test } from '@japa/runner'
import { Tenant } from '#domain/tenant/tenant'

test.group('Tenant Entity', () => {
  test('should throw if name is empty', ({ assert }) => {
    const tenant = new Tenant({ name: '' })
    assert.throws(() => tenant.validate(), 'Tenant name is required')
  })

  test('should validate when name is valid', ({ assert }) => {
    const tenant = new Tenant({ name: 'Tenant A' })
    assert.doesNotThrow(() => tenant.validate())
  })
})
