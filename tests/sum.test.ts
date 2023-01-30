import test from 'ava';
import {sum} from "../src/sum"

test('sum is correct', async (t) => {
	const result = sum(1,2);
	t.is(result, 3);
});
