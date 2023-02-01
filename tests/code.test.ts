import test from 'ava';
import { Code } from '../src/models/Code';

test('code should have a valid length', (t) => {
	const c = new Code('2837263');
	t.is(c.code(), '2837263');
});
