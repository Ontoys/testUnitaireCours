import { Code } from '../Code';
import { Person } from './Person';
import { PersonRole, PersonType } from '../types';

export class Referer extends Person  {
	constructor(code: Code, firstName: string, lastName: string,personType: PersonType, personRole: PersonRole.PILOT | PersonRole.INTERVENANT, phone: string) {
		super(
			code,
			firstName,
			lastName,
			personType,
            personRole,
			phone
		);
	}
}
