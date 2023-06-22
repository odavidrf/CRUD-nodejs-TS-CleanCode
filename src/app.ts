import express, { Application } from 'express'
import RouterHealt from './helpers/health'
import handlerErrors from './helpers/errors'

class App {
	readonly expressApp: Application

	constructor() {
		this.expressApp = express()
		this.mountHealthCheck()
		this.mountMiddlewares()
		this.mountError()
	}

	mountHealthCheck() {
		this.expressApp.use('/', RouterHealt)
	}

	mountMiddlewares() {
		this.expressApp.use(express.json())
		this.expressApp.use(express.urlencoded({ extended: true }))
	}

	mountError(): void {
		this.expressApp.use(handlerErrors.notFound)
	}
}

export default new App().expressApp
