import Contact from '../domain/contact'
import { ContactRepository } from '../domain/contact.repository'
import { contactEntity } from './contact.entityes'
import databaseBootstrap from '../../../bootstrap/database.bootstrap'
import { EmailVO } from '../domain/email-value-objets/email.vo'



export default class contactInfraestructure implements ContactRepository {
	insert(contact: Contact): Contact {

		const contactInsert = new contactEntity
		const {email, lastname, name, phone, active}=contact.properties()
		Object.assign(contactInsert,{
			name,
			lastname,
			email:email.value,
			phone,
			active
		})

		await databaseBootstrap.dataSource.getRepository(contactEntity).save(contactInsert)
		return contact
	}

	async list(): Promise<Contact[]> {

		const repo = databaseBootstrap.dataSource.getRepository(contactEntity)

		const result = await repo.find({ where:{active:true} })

		return result.map((el:contactEntity)=>{

			const emailResult = EmailVO.create(el.email)

			//especificacion de email

			return new contactEntity({
				name:el.name,
				lastname:el.lastname,
				email:emailResult.value,
				phone:el.phone,
				active:el.active,
			})

		})
	}
}

   update(contact: Contact): Contact {
		throw new Error('Method not implemented.')
	}

	delete(email: string): Contact {
		throw new Error('Method not implemented.')
	}

}
