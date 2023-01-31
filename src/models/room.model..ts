import { RoomType } from '../services/types.service';

export class Room {
	constructor(
		private idRoom: number,
		private label: string,
		private capacity: number,
		private roomType: RoomType
	) {
		if (idRoom === undefined || idRoom === null || idRoom < 0) {
			throw new Error('Room id must be defined');
		}
		if (label === undefined || label === null || label === '') {
			throw new Error('Room label must be defined');
		}
		if (capacity === undefined || capacity === null || capacity < 0) {
			throw new Error('Room capacity must be defined');
		}
		if (roomType === undefined || roomType === null) {
			throw new Error('Room type must be defined');
		}
	}
	getIdRoom(): number {
		return this.idRoom;
	}
	setLabel(label: string) {
		this.label = label;
	}
	getLabel(): string {
		return this.label;
	}
	setCapacity(capacity: number) {
		this.capacity = capacity;
	}
	getCapacity(): number {
		return this.capacity;
	}
	setRoomType(roomType: RoomType) {
		this.roomType = roomType;
	}
	getRoomType(): RoomType {
		return this.roomType;
	}
}
