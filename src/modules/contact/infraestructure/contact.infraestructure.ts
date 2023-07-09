import Contact from '../domain/contact'
import { ContactRepository } from '../domain/contact.repository'
import { contactEntity } from './contact.entityes'
import databaseBootstrap from '../../../bootstrap/database.bootstrap'
import { EmailVO} from '../domain/email-value-objets/email.vo'
import { UserEmailInvalidExecptions, UserNotFoundExceptions } from '../domain/exceptions/user.exceptions'
import { Result, err, ok } from 'neverthrow'
import { ContactUpdate } from '../domain/domain_interfaces/entity.update'

export default class contactInfraestructure implements ContactRepository {
	async insert(contact: Contact): Promise<Contact> {
		const contactInsert = new contactEntity()
		const { email, lastname, name, phone, active } = contact.properties()
		Object.assign(contactInsert, {
			name,
			lastname,
			email: email.value,
			phone,
			active,
		})

		await databaseBootstrap.dataSource.getRepository(contactEntity).save(contactInsert)
		return contact
	}

	async list(): Promise<Contact[]> {
		console.log(contactEntity)
		const repo = databaseBootstrap.dataSource.getRepository(contactEntity)
		const result = await repo.find({ where: { active: true } })
		return result.map((el: contactEntity) => {
			const emailResult = EmailVO.create(el.email)
			if (emailResult.isErr()) {
				throw new UserEmailInvalidExecptions()
			}
			return new Contact({
				name: el.name,
				lastname: el.lastname,
				email: emailResult.value,
				phone: el.phone,
				active: el.active,
			})
		})
	}

	async update(email: string, contact: Partial<ContactUpdate>): Promise<Result<Contact, UserNotFoundExceptions>> {
		const repo = databaseBootstrap.dataSource.getRepository(contactEntity)
		const userFound = await repo.findOne({
			where: { email },
		})
		if (userFound) {
			Object.assign(userFound, contact)
			const contactEntity = await repo.save(userFound)
			const EmailResult = EmailVO.create(contactEntity.email)

			if (EmailResult.isErr()) {
				return err(new UserEmailInvalidExecptions())
			}

			return ok(
				new Contact({
					name: contactEntity.name,
					lastname: contactEntity.lastname,
					phone: contactEntity.phone,
					email: EmailResult.value,
					active: contactEntity.active,
				}),
			)
		} else {
			return err(new UserNotFoundExceptions())
		}
	}

	async delete(email: string): Promise<Result<Contact, UserNotFoundExceptions>> {
		const repo = databaseBootstrap.dataSource.getRepository(contactEntity)
		const userFound = await repo.findOne({
			where: { email },
		})
		if (userFound) {
			userFound.active = false
			const contactEntity = await repo.save(userFound)
			const emailResult = EmailVO.create(contactEntity.email)

			if (emailResult.isErr()) {
				return err(new UserEmailInvalidExecptions())
			}
			return ok(
				new Contact({
					name: contactEntity.name,
					lastname: contactEntity.lastname,
					phone: contactEntity.phone,
					email: emailResult.value,
					active: contactEntity.active, 
				}),
			)
		} else {
			return err(new UserNotFoundExceptions())
		}
	}
}
