import Contact,{ContactProperties} from './contact'

export interface ContactRepository {
	list():ContactProperties[]
	insert(contact: Contact): Contact
	update(contact: Contact): Contact
	delete(email: string): Contact
}
