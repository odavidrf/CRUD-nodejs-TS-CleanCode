import { Request, Response, NextFunction } from 'express'
import { EmailVO } from '../../domain/email-value-objets/email.vo'
import { IError } from '../helpers/ierrors'
import ContactFactory from '../../domain/contactfactory'
import ContactApplication from '../../application/contact.aplication'
import { ContactIsertMapping } from './dto/contact-insert.dto'
import { ContactListMapping } from './dto/contact-list.dto'
import { ContactUpdateMapping } from './dto/contact-update.dto'
import { ContactDeleteMapping } from './dto/contact-delete.dto'

export default class {
	constructor(private readonly application: ContactApplication) {
		//
	}

	async insert(req: Request, res: Response, next: NextFunction) {
		const { name, lastname, email, phone } = req.body
		const emailResult = EmailVO.create(email)
		if (emailResult.isErr()) {
			const err: IError = new Error(emailResult.error.message)
			err.status = 411
			return next(err)
		}

		const contactResult = await new ContactFactory().create(name, lastname, emailResult.value, phone)
		if (contactResult.isErr()) {
			const err: IError = new Error(contactResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const data = await this.application.insert(contactResult.value)
			const result = new ContactIsertMapping().execute(data.properties())
			res.status(201).json(result)
		}
	}

	async list(_req: Request, res: Response) {
		const list = await this.application.list()
		const result = new ContactListMapping().execute(list.map(contact => contact.properties()))
		res.json(result)
	}

	async update(req: Request, res: Response, next: NextFunction) {
		const { email } = req.params
		const fildsToUpdate = req.body

		const emailResult = EmailVO.create(email)
		if (emailResult.isErr()) {
			const err: IError = new Error(emailResult.error.message)
			err.status = 411
			return next(err)
		}

		const dataResult = await this.application.update(email, fildsToUpdate)
		if (dataResult.isErr()) {
			const err: IError = new Error(dataResult.error.message)
			err.status = 411
			return next(err)
		} else {
			const result = new ContactUpdateMapping().execute(dataResult.value.properties())
			return res.json(result)
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const { email } = req.params

		const emailResult = EmailVO.create(email)
		if (emailResult.isErr()) {
			const err: IError = new Error(emailResult.error.message)
			err.status = 404
			return next(err)
		}

		const dataResult = await this.application.delete(email)
		if (dataResult.isErr()) {
			const err: IError = new Error(dataResult.error.message)
			err.status = 404
			return next(err)
		} else {
			const result = new ContactDeleteMapping().execute(dataResult.value.properties())
			res.json(result)
		}
	}
}
