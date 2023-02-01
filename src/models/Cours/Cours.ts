import { Referer } from "./Referer";

export class Cours {
    constructor(private _referer: Referer) {

    }

    referer(): Referer {
        return this._referer;
    }
}