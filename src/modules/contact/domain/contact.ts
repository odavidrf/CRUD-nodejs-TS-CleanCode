import { IEntity } from '../shared/entity.interfaces'
import { ContactRequired } from '../shared/entity.Required'
import { ContactUpdate } from '../shared/entity.update'
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
