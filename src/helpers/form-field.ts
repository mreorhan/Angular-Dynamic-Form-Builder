import { FormOptions } from "./base-form-element";
import { Password } from "./form-elements/password";
import { TextBox, TextBoxOptions } from "./form-elements/textbox";

export class FormField {
    static TextBox(options: FormOptions<string, TextBoxOptions>) {
        return new TextBox(options);
    }

    static Password(options: FormOptions<string, TextBoxOptions>) {
        return new Password(options);
    }
}