import { Code } from '../Code';
import { Person } from './Person';
import { PersonRole, PersonType } from '../types';
import { Referer } from '../Cours/Referer';
import { Subject } from '../Subject';

export class Pilot extends Referer {
	constructor(code: Code, firstName: string, lastName: string, phone: string) {
		super(
			code,
			firstName,
			lastName,
			phone,
			PersonType.INTERNAL,
			PersonRole.PILOT
		);
	}
}
