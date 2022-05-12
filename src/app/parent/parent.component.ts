import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list:any=[]
  data :any
  Fname: any
  lName: any
  phone: any
  password: any

  
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  senddata(event: any) {
    this.data = event
    console.log(this.data)
    this.Fname = this.data['Firstname']
    this.lName = this.data['Lastname']
    this.phone = this.data['Phone_number']
    this.password = this.data['password']
   this.list.push(this.data)
  }

 
}
