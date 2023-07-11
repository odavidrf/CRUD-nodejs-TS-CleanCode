// this class just validate a number of nine char
export default class{

	static PhoneValidator(phoneNumber:string):boolean{
		const cleanedNumber = phoneNumber.replace(/\s+|-/g, '');
		return /^\d{9}$/.test(cleanedNumber)
	}
}


