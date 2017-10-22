import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export function  mobileAsyncValidatorfile(control: FormControl): any {
    var myreg = /^(((13[0-9]{1}) | (15[0-9]{1}) |(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log('mobile的校验结果是'+ valid);
    return Observable.of(valid ? null : {mobile : true}).delay(5000);
  }

  // 针对group的校验器
export function equalValidatorfile(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pConfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log('密码的校验结果是'+ valid);
    return valid ? null : {equal: true};
  }
