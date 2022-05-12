import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  Form = new FormGroup({
    Firstname: new FormControl('', [Validators.required, Validators.pattern('^[sa-zA-Z]*$')]),
    Lastname: new FormControl('', [Validators.required, Validators.pattern('^[sa-zA-Z]*$')]),
    Phone_number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required,Validators.minLength(8)])
});

  @Output() child = new EventEmitter<any>()

  constructor() { }
  ngOnInit(): void {
  }

  onsubmit() {
    if(this.Form.controls['password'].value===this.Form.controls['confirmPassword'].value && this.Form.valid){
    this.child.emit(this.Form.value)
    }
    else{
      alert("password and Confirm password did not match")
    }
  }

}

