import { Code } from '../Code';
import { PersonRole, PersonType } from '../types';
import validator from 'validator';

export abstract class Person {
	private _email: string;

	constructor(
		private _code: Code,
		private _firstName: string,
		private _lastName: string,
		private _type: PersonType,
		private _role: PersonRole,
		private _phone: string | null = null
	) {
		if (_firstName.length < 2) {
			throw new Error('Person firstname must have at least 2 characters');
		}

		if (_lastName.length < 2) {
			throw new Error('Person lastname must have at least 2 characters');
		}

		if (
			(_type === PersonType.INDEPEDANT || _type === PersonType.CONTRACTOR) &&
			_role !== PersonRole.INTERVENANT
		) {
			throw new Error(
				'Person of type external should be of role intervenant only'
			);
		}

		if (
			((_role === PersonRole.INTERVENANT||_role === PersonRole.PILOT) &&
				!validator.isMobilePhone(_phone || "", "fr-FR"))
		) {
			throw new Error('Person phone number is not valid');
		}

		this._email = this._generateEmail();
	}

	private _generateEmail(): string {
		if (
			this._type === PersonType.INDEPEDANT ||
			this._type === PersonType.CONTRACTOR ||
			this._role === PersonRole.STUDENT
		) {
			return `${this._firstName}.${this._lastName}@viacesi.fr`;
		}

		const firstLetter = this._firstName.charAt(0);
		return `${firstLetter}${this._lastName}@cesi.fr`;
	}

	email(): string {
		return this._email;
	}

	code(): Code {
		return this._code;
	}

	phone(): string | null {
		return this._phone;
	}
}
