import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { User } from '../model/user.model';


function ratingRangeValidator(min : number, max : number): ValidatorFn {
  return (c : AbstractControl): {[key: string]: boolean} | null => {

    if(c.value !=null && (isNaN(c.value) || c.value < min || c.value >max )) {
      return {'rangeError': true};
    }
    return null;
  };
}

function emailMatcher(c : AbstractControl): {[key: string]: boolean} | null {
  const emailControl = c.get('email');
  const emailConfirmControl = c.get('confirmEmail');

  if(emailConfirmControl.pristine || emailControl.pristine){
    return null;
  }

  if(emailConfirmControl.value == emailControl.value){
    return null;
  }

  return {'match': true}
}






@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  public registerForm: FormGroup;

  public newUser: User = new User();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.minLength(4)]],
      nom: ['',[Validators.required, Validators.maxLength(20)]],
      emailGroup: this.formBuilder.group({

        email: ['',[Validators.required, Validators.email]],
        confirmEmail: ['',Validators.required],

      }, {Validators: emailMatcher}),
      
      phone:'',
      rating: [null, ratingRangeValidator(1,5)],
      notification: 'email',
      senCat: false
    });

    this.registerForm.get('notification').valueChanges.subscribe(value => {
      this.setNotificationSettings(value);
    });
    
    /*this.registerForm = new FormGroup({
      prenom: new FormControl(),
      nom: new FormControl(),
      email: new FormControl(),
      senCat: new FormControl(false),
    });*/
  }
  public saveData(){
    console.log(this.registerForm);
    console.log("valeurs:", JSON.stringify(this.registerForm.value))
    console.log("salut");

  }

  public fillFormData(): void {
    this.registerForm.setValue({
      prenom: "ousseynou",
      nom: "mbodji",
      email: "mbodjioussey94@gmail.com",
      senCat: true
    });
  }

  public setNotificationSettings(method: string): void {
    const phoneControl=this.registerForm.get('phone');

    if(method == 'text') {
      phoneControl.setValidators(Validators.required);
    }else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();

  }

}
