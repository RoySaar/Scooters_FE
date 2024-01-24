export type ValidationSchema<T = any> = (value: T) => string;

export type ValidationConfig<T> = {
    [K in keyof T]?: {
        schema: ValidationSchema;
        required?: boolean;
    };
};
