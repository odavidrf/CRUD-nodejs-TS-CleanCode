import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { ContactUpdateValidator } from '../validator/contact.update.validator'

class contactUpdateMiddlewares {
	static async ValidateContact(req: Request, res: Response, next: NextFunction) {
		const { email } = req.params
		const contactUpdateValidator = new ContactUpdateValidator()
		contactUpdateValidator.email = email
		const errors = await validate(contactUpdateValidator)
		console.log(email)

		if (errors.length > 0) {
			console.log(errors)
			return next(new Error('Request Invalid'))
		}
		next()
	}
}

export const MiddlewareUpdate: ((req:Request,res:Response,next:NextFunction)=>Promise<void>)[] = [
	contactUpdateMiddlewares.ValidateContact
	//metodo2
	//metodo3
	//esta es la buena practica
]
