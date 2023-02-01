import { Code } from '../Code';
import { Person } from './Person';
import { PersonRole, PersonType } from '../types';

export class Student extends Person {
	constructor(
		code: Code,
		firstName: string,
		lastName: string,
	) {
		super(
			code,
			firstName,
			lastName,
			PersonType.INTERNAL,
			PersonRole.STUDENT,
			null
		);
	}
}
