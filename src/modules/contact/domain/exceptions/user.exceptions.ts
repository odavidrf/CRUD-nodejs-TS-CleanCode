import { DomainException } from './dominio.exceptions'
import { DomainExceptionCode } from '../enums/enums'

export class UserNameRequieredExecptions extends DomainException {
	constructor() {
		super(UserNameRequieredExecptions.getmessage())
		this.name = DomainExceptionCode.USER_NAME_REQUIRED
	}
	static getmessage() {
		return 'name is required'
	}
}

export class UserLastNameRequieredExecptions extends DomainException {
	constructor() {
		super(UserLastNameRequieredExecptions.getmessage())
		this.name = DomainExceptionCode.USER_LASTNAME_REQUIRED
	}
	static getmessage() {
		return 'Last Name is required'
	}
}

export class UserEmailRequieredExecptions extends DomainException {
	constructor() {
		super(UserEmailRequieredExecptions.getmessage())
		this.name = DomainExceptionCode.USER_EMAIL_REQUIRED
	}
	static getmessage() {
		return 'Email is required'
	}
}

export class UserEmailInvalidExecptions extends DomainException {
	constructor() {
		super(UserEmailInvalidExecptions.getmessage())
		this.name = DomainExceptionCode.USER_EMAIL_INVALID
	}
	static getmessage() {
		return 'Email is invalid'
	}
}

export class UserPhoneRequieredExecptions extends DomainException {
	constructor() {
		super(UserPhoneRequieredExecptions.getmessage())
		this.name = DomainExceptionCode.USER_PHONE_REQUIRED
	}
	static getmessage() {
		return 'phone is required'
	}
}

export class UserNotFoundExceptions extends DomainException{
	constructor() {
		super(UserNotFoundExceptions.getMessage())
		this.name = DomainExceptionCode.USER_NOT_FOUND
	}
	static getMessage() {
		return 'User not found'
}

}
