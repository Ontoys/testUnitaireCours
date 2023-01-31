import test from 'ava';
import { Room } from '../src/models/room.model.';

test('room should have a valid RoomType', (t) => {
	t.throws(() => {
		// @ts-ignore
		new Room(1, 'room1', 10, undefined);
	});
});
test('room should have a valid id', (t) => {
	t.throws(() => {
		// @ts-ignore
		new Room(undefined, 'room1', 10, 'Amphiteatre');
	});
});
test('room should have a valid label', (t) => {
	t.throws(() => {
		// @ts-ignore
		new Room(1, undefined, 10, 'Amphiteatre');
	});
});
test('room should have a valid capacity', (t) => {
	t.throws(() => {
		// @ts-ignore
		new Room(1, 'room1', undefined, 'Amphiteatre');
	});
});
test('room should be valid', (t) => {
	const r = new Room(1, 'room1', 10, 'Amphiteatre');
	t.is(r.getIdRoom(), 1);
	t.is(r.getLabel(), 'room1');
	t.is(r.getCapacity(), 10);
	t.is(r.getRoomType(), 'Amphiteatre');
});
