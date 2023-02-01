import { Code } from '../Code';
import { Referer } from './Referer';
import { PersonRole, PersonType } from '../types';

export class Intervenant extends Referer {
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
