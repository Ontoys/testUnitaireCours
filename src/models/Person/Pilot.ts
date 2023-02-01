import { Code } from '../Code';
import { Person } from './Person';
import { PersonRole, PersonType } from '../types';

export class Pilot extends Person {
	constructor(code: Code, firstName: string, lastName: string, phone: string) {
		super(
			code,
			firstName,
			lastName,
			PersonType.INTERNAL,
			PersonRole.PILOT,
			phone
		);
	}
}