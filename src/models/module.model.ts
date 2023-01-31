export class Module {
	constructor(
		private id: string,
		private label: string,
		private level: string,
		private number: number
	) {}
	getId(): string {
		return this.id;
	}
	setLabel(label: string) {
		this.label = label;
	}
	getLabel(): string {
		return this.label;
	}
	setLevel(level: string) {
		this.level = level;
	}
	getLevel(): string {
		return this.level;
	}
	setNumber(number: number) {
		this.number = number;
	}
	getNumber(): number {
		return this.number;
	}
}
