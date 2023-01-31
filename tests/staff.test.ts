import test, { ThrowsExpectation } from 'ava';
import { Staff } from '../src/models/Staff';
import { StaffType } from '../src/services/types.service';

test('staff should be valid', (t) => {
	const s = new Staff(
		'2f0244f',
		'jonh',
		'doe',
		'jonhdoe@viacesi.fr',
		'0695742890',
		'password',
		'pilot' as StaffType
	);
	t.is(s.getEmail(), 'jonhdoe@viacesi.fr');
});
