import { Request, Response, NextFunction } from 'express'
import { EmailVO } from '../../domain/email-value-objets/email.vo'
import { IError } from '../helpers/ierrors'

export default class {
	constructor() {
		//
	}

	async insert(req: Request, res: Response, next: NextFunction) {
		const { name, lastname, email, phone } = req.body
		const emailResult = EmailVO.create(email)
		if (emailResult.isErr()) {
			const err: IError = new Error(emailResult.error.message)
			err.status = 400
			return 
		}
	}

	async list(req: Request, res: Response) {}

	async update(req: Request, res: Response) {}

	async delete(req: Request, res: Response) {}
}
