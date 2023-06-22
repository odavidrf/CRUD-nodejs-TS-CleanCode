import { EmailVO } from '../domain/email-value-objets/email.vo'

export interface ContactRequired {
	name: string
	lastname: string
	email: EmailVO
	phone: number
}
