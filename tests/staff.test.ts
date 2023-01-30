import test from 'ava';
import { Staff } from '../src/Staff';

test('staff should have a valid uuid', (t) => {
	t.throws(() => {
		new Staff('1', 'jonh', 'doe', 'jonhdoe@viacesi.fr', 96574289);
	});
});

test('staff should have a valide email', (t) => {
	t.throws(() => {
		new Staff('1', 'jonh', 'doe', 'jonhdoe@viacesi.fr', 96574289);
	});
});
