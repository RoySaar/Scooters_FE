import {isEmpty, size} from 'lodash';

const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

const REQUIRED_ERROR = 'Field is required.'
const PASSWORD_LENGTH_ERROR = 'Password needs to be between 8-16 characters long.'
const PASSWORD_STRENGTH_ERROR = 'Password needs to contain 1 uppercase, 1 lowercase and 1 special character.';

function notEmpty(value: string) {
    if (isEmpty(value)) {
        return REQUIRED_ERROR;
    }

    return '';
}

function password(value: string) {
    if (isEmpty(value)) return REQUIRED_ERROR;

    if (size(value) < 6 || size(value) > 18) return PASSWORD_LENGTH_ERROR;

    return PASSWORD_REGEX.test(value) ? '' : PASSWORD_STRENGTH_ERROR;
}

export const defaultValidations = {notEmpty, password};
