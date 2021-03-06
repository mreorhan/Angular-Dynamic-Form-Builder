import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseFormElement } from 'src/helpers/base-form-element';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  form!: FormGroup;
  _fields!: Array<BaseFormElement<any, any>>;
  get fields(){
    return this._fields;
  }
  @Input() set fields(param: Array<BaseFormElement<any,any>>){
    this.form = this.toFormGroup(param);
    this._fields = param;
  }
  @Output() onSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  passToComponent() {
    this.onSubmit.emit(this.form.getRawValue());
  }

  toFormGroup(fields: Array<BaseFormElement<any, any>>) {
    const formGroup: any = {}
    fields.forEach((field) => {
      let validators: ValidatorFn[] = [];
      if (field.validators && field.validators.length > 0) {
        validators = field.validators;
      }
      if (field.required === true) {
        validators = [Validators.required, ...validators];
      }
      formGroup[field.key] = new FormControl(field.value, validators);
    })

    return new FormGroup(formGroup);
  }

}
