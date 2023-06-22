import Contact from '../domain/contact';
import { contactRepository } from '../domain/contact.repository'


export default class contactInfraestructure implements contactRepository {
	list(): Promise<Contact[]> {
		throw new Error('Method not implemented.');
	}
	insert(contact: Contact): Contact {
		throw new Error('Method not implemented.');
	}
	update(contact: Contact): Contact {
		throw new Error('Method not implemented.');
	}
	delete(email: string): Contact {
		throw new Error('Method not implemented.');
	}

}
