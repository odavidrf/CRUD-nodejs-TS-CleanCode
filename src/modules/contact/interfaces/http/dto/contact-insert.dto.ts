import { ContactProperties } from 'src/modules/contact/domain/contact'
import { DTO } from './dto.generic'

interface ContactDTO {
	name: string
	lastname: string
	email: string
	phone: number
}

export type ContactInsertOneDTO = ContactDTO

export class ContactIsertMapping extends DTO<ContactProperties, ContactInsertOneDTO> {
	execute(data: ContactProperties): ContactInsertOneDTO {
		return {
			name: data.name,
			lastname: data.lastname,
			email: data.email.value,
			phone: data.phone,
		}
	}
}
