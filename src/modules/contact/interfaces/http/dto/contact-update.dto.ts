import { ContactProperties } from 'src/modules/contact/domain/contact'
import { DTO } from './dto.generic'

interface ContactDTO {
	name: string
	lastname: string
	phone: number
}

export type ContactUpdateDTO = ContactDTO

export class ContactUpdateMapping extends DTO<ContactProperties, ContactUpdateDTO> {
	execute(data: ContactProperties): ContactDTO {
		return {
			name: data.name,
			lastname: data.lastname,
			phone: data.phone,
		}
	}
}
