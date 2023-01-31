import { CodeCesi } from './types.service';
import validator from 'validator';

export const codeValidator = (code: CodeCesi): boolean => {
	return code.length === 7;
};
export function stringValidator(stringToValidate: string, stringName: string) {
	if (
		stringToValidate === undefined ||
		stringToValidate === null ||
		stringToValidate === null
	) {
		throw new Error('Staff ' + stringName + ' must be defined');
	} else if (!validator.isAlpha(stringToValidate)) {
		throw new Error('Staff ' + stringName + ' must be a valid name');
	}
}
