export class Code {
    constructor(private _code: string) {
        if (_code.length !== 7) {
            throw new Error('Code must be equal to 7 characters');
        }
    }

    code(): string {
        return this._code;
    }
}