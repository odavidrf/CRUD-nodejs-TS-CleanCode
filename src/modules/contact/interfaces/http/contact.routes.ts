import { Router } from 'express'
import ContactApplication from '../../application/contact.aplication'
import { ContactRepository } from '../../domain/contact.repository'
import contactInfraestructure from '../../infraestructure/contact.infraestructure'
import contactController from './contact.controller'
import { MiddlewareUpdate } from './middlewares/contact.update.middlewares'

const infraestructure: ContactRepository = new contactInfraestructure()
const application: ContactApplication = new ContactApplication(infraestructure)
const controller = new contactController(application)

class ContactRouter {
	readonly expresRouter: Router

	constructor() {
		this.expresRouter = Router()
		this.mountRoutes()
	}

	mountRoutes() {
		this.expresRouter.post('/insert', controller.insert)
		this.expresRouter.get('/list',controller.list)
		this.expresRouter.put('/update/:email',...MiddlewareUpdate,controller.update)
		this.expresRouter.delete('/delete/:email',controller.delete)
	}
}

export default new ContactRouter().expresRouter
