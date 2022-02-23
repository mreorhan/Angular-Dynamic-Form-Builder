import { ValidatorFn } from "@angular/forms";

export interface FormOptions<T, O> {
    key: string;
    value?: T;
    typeOptions?: O;
    disabled?: boolean;
    required?: boolean;
    validators?: Array<ValidatorFn>;
    controlType?: string;
    label: string;
}

export class BaseFormElement<T,O> implements FormOptions<T,O>{
    key!: string;
    value?: T | undefined;
    typeOptions?: O | undefined;
    disabled?: boolean;
    required?: boolean | undefined;
    validators?: ValidatorFn[] | undefined;
    controlType?: string;
    label!: string;
    

    constructor(options: FormOptions<T,O>) {
        this.value = options.value;
        this.key = options.key;
        this.required = options.required;
        this.typeOptions = options.typeOptions;
        this.validators = options.validators;
        this.disabled = options.disabled || false;
        this.label = options.label;
    }
}