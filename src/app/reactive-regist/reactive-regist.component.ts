import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { mobileAsyncValidatorfile } from './../validator/Validator';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // 自定义校验器
  mobileValidator(control: FormControl): any {
    var myreg = /^(((13[0-9]{1}) | (15[0-9]{1}) |(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log('mobile的校验结果是'+ valid);
    return valid ? null : {mobile : true};
  }

  // 针对group的校验器
  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pConfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log('密码的校验结果是'+ valid);
    return valid ? null : {equal: {desc: '两次输入的密码不一致'}};
  }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordsGroup: new FormGroup({
    //     password: new FormControl(),
    //     pConfirm: new FormControl()
    //   })
    // })

    // formBuilder 的使用
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', this.mobileValidator, mobileAsyncValidatorfile],
      passwordsGroup: fb.group({
        password: [''],
        pConfirm: ['']
      }, {validator: this.equalValidator})
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log('username的校验结果是'+ isValid);
    let errors: any = this.formModel.get('username').errors;
    console.log('username的错误信息是'+ JSON.stringify(errors));

    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }

}
