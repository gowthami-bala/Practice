import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  title = "withivy";
  show = true;

  currentElement: string | undefined;

  @ViewChild('scrollOne') scrollOne:any= ElementRef;
  @ViewChild('scrollTwo') scrollTwo:any= ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  

  
  updateVerticalScroll(event:any) {
    if (this.currentElement === 'scrollTwo') {
      this.scrollOne.nativeElement.scrollTop = event.target.scrollTop;
    } else if (this.currentElement === 'scrollOne') {
      this.scrollTwo.nativeElement.scrollTop = event.target.scrollTop;
    }
  }
}
