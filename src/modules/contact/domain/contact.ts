import { IEntity } from './domain_interfaces/entity.interfaces'
import { ContactRequired } from './domain_interfaces/entity.Required'
import { ContactUpdate } from './domain_interfaces/entity.update'
import { EmailVO } from './email-value-objets/email.vo'

export type ContactProperties = Required<ContactRequired>

export default class Contact implements IEntity<ContactProperties, ContactUpdate> {
	private name: string
	private lastname: string
	private readonly email: EmailVO
	private phone: number
	private active: boolean

	constructor(contactProperties: ContactProperties) {
		this.active = true
		Object.assign(this, contactProperties)
	}

	properties(): ContactProperties {
		return {
			name: this.name,
			lastname: this.lastname,
			email: this.email,
			phone: this.phone,
			active: this.active
		}
	}

	update(fields: ContactUpdate) {
		Object.assign(this, fields)
	}

	//soft delete
	delete() {
		this.active = false
	}
}
