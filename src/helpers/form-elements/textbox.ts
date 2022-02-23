import { BaseFormElement } from "../base-form-element";

export type TextBoxOptions = {
    placeholder?: string;
}
export class TextBox extends BaseFormElement<string, TextBoxOptions> {
    override controlType = 'textbox';
    
    constructor(options: BaseFormElement<string, TextBoxOptions>) {
        super(options);
        if(!this.typeOptions) {
            this.typeOptions = {
                placeholder: 'Write' + options.label
            }
        }
    }
}