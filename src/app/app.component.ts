import { Component } from '@angular/core';
import { FormField } from 'src/helpers/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formTestFields!: any;
  constructor(){
  this.formTestFields=  [
      FormField.TextBox({
        key: 'username',
        label: 'username'
      }),
  
      FormField.Password({
        key: 'password',
        label: 'password'
      })
    ]
  }

  showFormResponse(e: any){
    console.log(e)
  }
}
