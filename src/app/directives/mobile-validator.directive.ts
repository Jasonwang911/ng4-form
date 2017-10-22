import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidatorfile } from './../validator/Validator';

@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidatorfile, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
