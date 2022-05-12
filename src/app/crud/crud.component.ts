import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 list:any
 display: boolean = false;
 showDialog() {
  this.display = true;
}
  loginForm:any=FormGroup 
  constructor(private fb:FormBuilder,private router:Router) { 
  this.loginForm=this.fb.group({
      Name:['',[Validators.required,Validators.pattern('^[sa-zA-Z]*$')]],
      Email:['',[Validators.required,Validators.email]],
      Phone_number:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Password:['',Validators.required],
      Confirm_password:['',Validators.required]
    })
  }
 


  ngOnInit(): void {

  }

  onsubmit(){
    console.log(this.loginForm.value)
    // this.list.push(this.loginForm.value)
    this.router.navigateByUrl('child')
  }


   
}