import { Code } from '../Code';
import { PersonRole, PersonType } from '../types';
import { Referer } from './Referer';

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
			phone,
			intervenantType,
			PersonRole.INTERVENANT
		);
	}
}
