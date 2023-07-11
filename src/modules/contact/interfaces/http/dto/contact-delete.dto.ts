import { ContactProperties } from 'src/modules/contact/domain/contact'
import { DTO } from './dto.generic'

interface ContactDTO {
	name: string
	lastname: string
	email: string
	phone: number
}

export type ContactDeleteDTO = ContactDTO

export class ContactDeleteMapping extends DTO<ContactProperties, ContactDeleteDTO> {
	execute(data: ContactProperties): ContactDeleteDTO {
		return {
			name: data.name,
			lastname: data.lastname,
			email: data.email.value,
			phone: data.phone,
		}
	}
}
