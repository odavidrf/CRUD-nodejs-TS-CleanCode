import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
import { contactEntity } from '../modules/contact/infraestructure/contact.entityes'

let appDataSource: DataSource

export default class extends Bootstrap {
	initialize(): Promise<DataSource> {
		const AppDataSource = new DataSource({
			type: 'mysql',
			host: 'localhost',
			port: 3308,
			username: 'adminUser',
			password: '12345',
			database: 'bddcursonode',
			synchronize: true,
			logging: true,
			entities: [contactEntity],
			migrations: [],
			subscribers: [],
		})
		appDataSource = AppDataSource

		return AppDataSource.initialize()
	}

	static get dataSource(): DataSource {
		return appDataSource
	}
}
