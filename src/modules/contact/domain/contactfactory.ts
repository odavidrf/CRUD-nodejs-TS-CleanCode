import Contact, { ContactProperties } from './contact'
import { EmailVO } from './email-value-objets/email.vo'
import {
	UserLastNameRequieredExecptions,
	UserNameRequieredExecptions,
	UserPhoneRequieredExecptions,
} from './exceptions/user.exceptions'
import { err, ok, Result } from 'neverthrow'

export type ContactResult = Result<
	Contact,
	UserLastNameRequieredExecptions | UserNameRequieredExecptions | UserPhoneRequieredExecptions
>

export default class ContactFactory {
	async create(name: string, lastname: string, email: EmailVO, phone: number): Promise<ContactResult> {
		if (!name || name.trim() === '') {
			return err(new UserNameRequieredExecptions())
		}

		if (!lastname || lastname.trim() === '') {
			return err(new UserLastNameRequieredExecptions())
		}

// validate a phone number

		const contactProperties: ContactProperties = {
			name,
			lastname,
			email,
			phone,
			active: true,
		}
		const contact = new Contact(contactProperties)
		return ok(contact)
	}
}
