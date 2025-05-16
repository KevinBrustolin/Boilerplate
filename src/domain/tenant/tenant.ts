// TODO: Core Entity + extends

export interface TenantProps {
  id?: string
  name: string
  createdAt?: Date
}

export class Tenant {
  constructor(public props: TenantProps) {}

  validate() {
    if (!this.props.name || this.props.name.trim() === '') {
      throw new Error('Tenant name is required')
    }
  }
}
