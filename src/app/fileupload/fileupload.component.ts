import { Component, OnInit, ViewChild } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploadedFiles :any=[]
  constructor(private service:ServiceService ) { }

  ngOnInit(): void {

    let user =JSON.parse(localStorage.getItem('users') || '[]')
    console.log("user",user)
  }

 select(event:any) {
    console.log("Selected files", event);
    this.uploadedFiles= [{severity:'info', summary:'info', detail:'file selected',life:1000}];
  }
// onBasicUpload(event: any){
//   // console.log(event)
//     this.uploadedFiles=[{severity:'info', summary:'info',detail:'file uploaded'}]
//   }
// download() {
//   window.open('http://localhost:3456/file/get')
//   // this.service.filedownload().subscribe((res:any)=>{
//   //     console.log(res)
//   // })
// }
DownloadFile(){
// let users =JSON.parse(localStorage.getItem('users'))
  this.service.DownloadFiles().subscribe(
          (data:any) => this.downloadFile2(data)), // console.log(data),
          (error: any) => console.log("Error downloading the file."),
          () => console.info("OK");
}

downloadFile2(data:any){
var blob = new Blob([data], { type: 'text/csv' });
var url= window.URL.createObjectURL(blob);
window.open(url);
}
}
