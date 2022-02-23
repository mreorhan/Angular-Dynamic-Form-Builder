import { BaseFormElement } from "../base-form-element";
import { TextBox } from "./textbox";

export type TextBoxOptions = {
    placeholder?: string;
}
export class Password extends TextBox {
    override controlType = 'password';
    
    constructor(options: BaseFormElement<string, TextBoxOptions>) {
        super(options);
    }
}