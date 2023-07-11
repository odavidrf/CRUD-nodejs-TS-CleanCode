import ValueObject from './vo.class'
import {UserEmailInvalidExecptions} from '../exceptions/user.exceptions'
import { err, ok, Result} from 'neverthrow'

interface EmailProps {
	value: string
}

export type EmailResult = Result<EmailVO, UserEmailInvalidExecptions>

export class EmailVO extends ValueObject<EmailProps> {
	trim() {
		throw new Error('Method not implemented.')
	}
	private constructor(props: EmailProps) {
		super(props)
	}

	static create(email: string):EmailResult {
		if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
			return err(new UserEmailInvalidExecptions())
		}

		return ok(new EmailVO({value:email}))
	}
	get value(): string {
		return this.props.value
	}
}
