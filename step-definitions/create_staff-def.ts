import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { createStaff } from '../src';
import { Staff } from '../src/models/Staff';

Given('supervisor sends all info to create un {staff}', async function (staff) {
	this.staff = staff;
	this.pilot = new Staff(
		'ac18d322-a0ce-11ed-a8fc-0242ac120002',
		'jonh',
		'doe',
		'        ',
		'96574289'
	);
});
When('supervisor wants to create a staff', async function () {
	this.coursesReponses = createStaff(this.staff);
});
Then('supervisor should see the {string}', async function (staff: Staff) {
	return typeof staff === 'object';
});
