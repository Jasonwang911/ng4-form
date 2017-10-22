import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

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
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pConfirm: ['']
      })
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
