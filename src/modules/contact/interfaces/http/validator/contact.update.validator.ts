import { IsString,IsNotEmpty, } from 'class-validator'

export class ContactUpdateValidator {
	@IsString({message:'email expected'})
	@IsNotEmpty({message:'email fild can not be empty'})
	email: string
}
