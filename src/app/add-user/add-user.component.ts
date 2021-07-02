import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
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
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public registerForm: FormGroup;

  public newUser: User = new User();

  public errorsMsg: string;

  private validationErrorsMessages = {
    required: 'Entrez votre E-mail',
    email: 'L\'E-mail n\'est pas valide'
  };

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
      senCat: true,
      addresses:this.formBuilder.array([this.createAddressGroup()])
     
    });

    this.registerForm.get('notification').valueChanges.subscribe(value => {
      this.setNotificationSettings(value);
    });

    const emailControl = this.registerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(val =>{
      console.log(val);
      this.setMessage(emailControl);
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

  private createAddressGroup(): FormGroup {
    return this.formBuilder.group({
      addressType: ['home'],
      street1: [''],
      street2: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
  }

  public get addressList(): FormArray {
    return <FormArray>this.registerForm.get('addresses');
  }

  public addAddress(): void {
    this.addressList.push(this.createAddressGroup());
  }

  private setMessage(val: AbstractControl): void {
    this.errorsMsg = '';

    if((val.touched || val.dirty) && val.errors) {
      this.errorsMsg = Object.keys(val.errors).map(
        key => this.validationErrorsMessages[key]
      ).join('');
    }
  }

}
