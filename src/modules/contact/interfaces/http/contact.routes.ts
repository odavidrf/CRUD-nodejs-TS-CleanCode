import { Router } from 'express'
import ContactApplication from '../../application/contact.aplication'
import { ContactRepository } from '../../domain/contact.repository'
import contactInfraestructure from '../../infraestructure/contact.infraestructure'
import contactController from './contact.controller'

const infraestructure: ContactRepository = new contactInfraestructure()
const application: ContactApplication = new ContactApplication(infraestructure)
const controller = new contactController(application)

class ContactRouter {
	readonly expresRouter: Router

	constructor() {
		this.expresRouter = Router()
	}

	mountRoutes (){
		this.expresRouter.post('/', controller.insert())
	}

}

export default new ContactRouter().expresRouter
