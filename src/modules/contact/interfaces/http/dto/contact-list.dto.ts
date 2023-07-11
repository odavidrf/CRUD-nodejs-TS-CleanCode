import { ContactProperties } from '../../../domain/contact'
import { DTO } from './dto.generic'



interface ContactDTO {
	name: string
	lastname: string
	phone: number
}

export type ContactlistDTO = ContactDTO[]

export class ContactListMapping extends DTO<ContactProperties[], ContactlistDTO> {
	execute(data: ContactProperties[]): ContactlistDTO {
		return data.map((contact: ContactProperties) => {
			return {
				name: contact.name,
				lastname: contact.lastname,
				phone: contact.phone,
				email:contact.email
			}
		})
	}
}
