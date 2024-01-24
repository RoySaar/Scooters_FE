import {useEffect, useState} from 'react';
import {forEach, isEmpty} from 'lodash';
import {ValidationConfig, ValidationSchema} from './validation.types';

function getFieldError(value: string, schema: ValidationSchema): string {
    return schema(value);
}

function validateFields<T>(formData: T, validationConfig: ValidationConfig<T>, dirtyFields: Record<string, boolean>) {
    const newErrors: Record<string, string> = {};

    forEach(validationConfig, (config, field) => {
        const value = formData[field as keyof T];

        if (config?.required === false || dirtyFields[field] === false) return;
        if (typeof value === 'string' || typeof value === 'number') {
            // @ts-ignore
            newErrors[field] = getFieldError(String(value), config.schema);
        }
    });

    return newErrors;
}

function updateDirtyFields<T>(
    formData: T,
    validationConfig: ValidationConfig<T>,
    dirtyFields: Record<string, boolean>,
) {
    const newDirty = {...dirtyFields};

    forEach(validationConfig, (config, field) => {
        const value = formData[field as keyof T];

        if (newDirty[field] === true) {
            return;
        }

        newDirty[field] = (isEmpty(newDirty[field]) && !isEmpty(value)) || !isEmpty(value);
    });

    return newDirty;
}

export function useGenericValidation<T>(formData: T, validationConfig: ValidationConfig<T>) {
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [dirtyFields, setDirtyFields] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const updatedDirtyFields = updateDirtyFields(formData, validationConfig, dirtyFields);
        const newErrors = validateFields(formData, validationConfig, updatedDirtyFields);

        if (JSON.stringify(updatedDirtyFields) !== JSON.stringify(dirtyFields)) {
            setDirtyFields(updatedDirtyFields);
        }

        if (JSON.stringify(newErrors) !== JSON.stringify(formErrors)) {
            setFormErrors(newErrors);
        }
    }, [formData, validationConfig]);

    const valid = Object.keys(validationConfig).every(key => {
        const k = key as keyof T;
        return validationConfig[k]?.required === false || fieldValid(formData[k], formErrors[key]);
    });

    return {valid, formErrors};
}

function fieldValid(value: unknown, error?: string): boolean {
    return !!value && !error;
}
