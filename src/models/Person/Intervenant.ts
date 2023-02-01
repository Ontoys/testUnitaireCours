import { Code } from '../Code';
import { Person } from './Person';
import { PersonRole, PersonType } from '../types';

export class Intervenant extends Person {
	constructor(
		code: Code,
		firstName: string,
		lastName: string,
		phone: string,
		intervenantType: PersonType.CONTRACTOR | PersonType.INDEPEDANT
	) {
		super(
			code,
			firstName,
			lastName,
			intervenantType,
			PersonRole.INTERVENANT,
			phone
		);
	}
}
