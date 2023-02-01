import test from 'ava';
import { Code } from '../src/models/Code';
import { Person } from '../src/models/Person';
import {PersonRole, PersonType} from "../src/models/types"


test('person should not have an empty firstname', (t) => {
	const error = t.throws(() => {
		const code = new Code('2837263');
		new Person(
			code,
			'',
			'doe',
			PersonType.INTERNAL,
			PersonRole.PILOT,
			'0606060606'
		);
	});

	t.is(error?.message, 'Person firstname must have at least 2 characters');
});

test('person should not have an empty lastname', (t) => {
	const error = t.throws(() => {
		const code = new Code('2837263');
		new Person(
			code,
			'john',
			'',
			PersonType.INTERNAL,
			PersonRole.PILOT,
			'0606060606'
		);
	});

	t.is(error?.message, 'Person lastname must have at least 2 characters');
});

test('person of type internal must be an email with format (jdoe@cesi.fr)', (t) => {
	const p = new Person(
		new Code('2837263'),
		'john',
		'doe',
		PersonType.INTERNAL,
		PersonRole.PILOT,
		'0606060606'
	);
	t.is(p.email(), 'jdoe@cesi.fr');
})

test('person of type external must be an email with format', (t) => {
	const p = new Person(
		new Code('2837263'),
		'anne',
		'doe',
		PersonType.INDEPEDANT,
		PersonRole.INTERVENANT,
		'0606060606'
	);
	t.is(p.email(), 'anne.doe@viacesi.fr');
})

test('person of type external should be of role intervenant only', (t) => {
	const error = t.throws(() => {
		new Person(
			new Code('2837263'),
			'anne',
			'doe',
			PersonType.INDEPEDANT,
			PersonRole.PILOT,
			null
		);
	});

	t.is(error?.message, 'Person of type external should be of role intervenant only');
});

test("Person of type external should have a valid phone", (t) => {
	const error = t.throws(() => {
		new Person(
			new Code('2837263'),
			'anne',
			'doe',
			PersonType.INDEPEDANT,
			PersonRole.INTERVENANT,
			null
		);
	});

	t.is(error?.message, 'Person phone number is not valid');
})