import { Referer } from '../Person/Referer';

export class Cours {
	constructor(private _referer: Referer) {}

	referer(): Referer {
		return this._referer;
	}
}
