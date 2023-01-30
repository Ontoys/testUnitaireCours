export class Staff {
	constructor(
		private id: string,
		private firstName: string,
		private lastName: string,
		private email: string,
		private phoneNumber: number
	) {
		if (id.length < 36) {
			throw new Error('Staff ID must be a valid UUID');
		}
	}

	getId(): string {
		return this.id;
	}

	setFirstName(firstName: string) {
		this.firstName = firstName;
	}
	getFirstName(): string {
		return this.firstName;
	}

	setLastName(lastName: string) {
		this.lastName = lastName;
	}
	getLastName(): string {
		return this.lastName;
	}

	setEmail(email: string) {
		this.email = email;
	}
	getEmail(): string {
		return this.email;
	}

	setPhoneNumber(pn: number) {
		this.phoneNumber = pn;
	}
	getPhoneNumber(): number {
		return this.phoneNumber;
	}
}
