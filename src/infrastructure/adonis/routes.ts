/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')

const GetAllTenantsController = () =>
  import('#infrastructure/controllers/getall_tenants_controller')
router.get('/tenants', [GetAllTenantsController])

const CreateTenantController = () => import('#infrastructure/controllers/create_tenant_controller')
router.get('/tenants/new', [CreateTenantController])
