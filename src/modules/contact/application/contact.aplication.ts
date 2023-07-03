import Contact from '../domain/contact';
import { ContactRepository } from '../domain/contact.repository';


export default class ContactApplication {
	constructor (private readonly contactRepository:ContactRepository){}

		insert (contact: Contact) {
			return this.contactRepository.insert(contact)
		}
	}

