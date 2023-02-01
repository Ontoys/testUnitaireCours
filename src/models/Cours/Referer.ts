import { Code } from '../Code';
import { Person } from '../Person';
import { Subject } from '../Subject';
import { PersonRole, PersonType } from '../types';

export abstract class Referer extends Person {
	constructor(
		code: Code,
		firstName: string,
		lastName: string,
		phone: string,
		personeType: PersonType,
		personRole: PersonRole
	) {
		super(code, firstName, lastName, personeType, personRole, phone);
	}

	// addSubjectsAproved(subject: Subject): void;
	// revokeSubjectsAproved(ref: string): void;
	// getSubjectsAproved(): Subject[];
}
