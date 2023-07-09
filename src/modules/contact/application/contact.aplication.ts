import Contact from '../domain/contact';
import { ContactRepository } from '../domain/contact.repository';
import { ContactUpdate } from '../domain/domain_interfaces/entity.update';


export default class ContactApplication {
	constructor (private readonly contactRepository:ContactRepository){}

		insert (contact: Contact) {
			return this.contactRepository.insert(contact)
		}

		list(){
			this.contactRepository.list()
		}

		update(email:string,contact:Partial<ContactUpdate>){
			return this.contactRepository.update(email, contact)
		}

		delete (email:string){
			return this.contactRepository.delete(email)
		}
	}

