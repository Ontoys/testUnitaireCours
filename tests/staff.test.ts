import test, { ThrowsExpectation } from 'ava';
import { Staff } from '../src/models/Staff';

test('staff should have a valid uuid', (t) => {
	let err = t.throws(() => {
		new Staff(
			'2f0244f0-5b99-422f-8739-62debe85ad63',
			'jonh',
			'doe',
			'jonhdoe@viacesi.fr',
			'96574289'
		);
	});
	t.is(err?.message, 'Staff ID must be a valid UUID');
	t.is(err?.message, 'Staff email must be defined');
	t.is(err?.message, 'Staff first name must be defined');
	t.is(err?.message, 'Staff last name must be defined');
	t.is(err?.message, 'Staff phone number must be a valid phone number');
});
