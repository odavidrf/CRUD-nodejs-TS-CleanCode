import Contact from './contact';
import { ContactUpdate } from './domain_interfaces/entity.update'
import {Result} from 'neverthrow'
import { UserNotFoundExceptions } from './exceptions/user.exceptions'

export interface ContactRepository {
	insert(contact: Contact): Promise<Contact>
	list(): Promise<Contact[]>
	update(email: string, contact: Partial<ContactUpdate>): Promise<Result<Contact, UserNotFoundExceptions>>
	delete(email: string): Promise<Result<Contact, UserNotFoundExceptions>>
}
