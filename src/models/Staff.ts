import validator from 'validator';
import { CodeCesi, StaffType } from '../services/types.service';
import { stringValidator } from '../services/validator.service';

export class Staff {
	constructor(
		private codeCesi: CodeCesi,
		private firstName: string,
		private lastName: string,
		private email: string,
		private phoneNumber: string,
		private password: string,
		private type: StaffType
	) {
		if (codeCesi.length === 7) {
			throw new Error('Staff ID must be a valid UUID');
		}
		if (email === undefined || email === null || email === '') {
			throw new Error('Staff email must be defined');
		} else if (!validator.isEmail(email)) {
			throw new Error('Staff email must be a valid email');
		}
		stringValidator(firstName, 'first name');
		if (
			phoneNumber !== null &&
			!validator.isMobilePhone(phoneNumber.toString(), 'fr-FR')
		) {
			throw new Error('Staff phone number must be a valid phone number');
		}
	}

	getId(): string {
		return this.codeCesi;
	}

	setFirstName(firstName: string) {
		this.firstName = firstName;
	}
	getFirstName(): string {
		return this.firstName;
	}

	setLastName(lastName: string) {
		this.lastName = lastName;
	}
	getLastName(): string {
		return this.lastName;
	}

	setEmail(email: string) {
		this.email = email;
	}
	getEmail(): string {
		return this.email;
	}

	setPhoneNumber(pn: string) {
		this.phoneNumber = pn;
	}
	getPhoneNumber(): string {
		return this.phoneNumber;
	}
	setPassword(password: string) {
		this.password = password;
	}
	setType(type: StaffType) {
		this.type = type;
	}
	getType(): StaffType {
		return this.type;
	}
}
