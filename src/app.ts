import express, { Application } from 'express'
import RouterHealt from './helpers/health'
import handlerErrors from './helpers/errors'
import routerContact from './modules/contact/interfaces/http/contact.routes'

class App {
	readonly expressApp: Application

	constructor() {
		this.expressApp = express()
		this.mountHealthCheck()
		this.mountMiddlewares()
		this.mountRoutes()
		this.mountError()
	}

	mountHealthCheck() {
		this.expressApp.use('/', RouterHealt)
	}

	mountMiddlewares() {
		this.expressApp.use(express.json())
		this.expressApp.use(express.urlencoded({ extended: true }))
	}

	mountRoutes (): void {
		this.expressApp.use('/contact', routerContact)
	}

	mountError(): void {
		this.expressApp.use(handlerErrors.notFound)
	}
}

export default new App().expressApp
