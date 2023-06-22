import Contact, { ContactProperties } from './contact'
import { EmailVO } from './email-value-objets/email.vo'

export default class ContactFactory {
	async create(name: string, lastname: string, email: EmailVO, phone: number) {
		const contactProperties: ContactProperties = {
			name,
			lastname,
			email,
			phone,
		}
		const contact = new Contact (contactProperties)
		return contact
	}
}
