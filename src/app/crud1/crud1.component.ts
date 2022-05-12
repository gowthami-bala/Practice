
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit {
  table: any = []
  Form: any
  Form1: any
  show: boolean = true
  display: boolean = false;
  msgs1:any = []; 
  msgs2:any = [];
  msgs3:any = [];
  msgs4:any = [];
  value1:any
  gSearch:any
  @ViewChild('downloadexcelref')  downloadexcelref!: ElementRef;
 
  
  constructor(private service: ServiceService, private fb: FormBuilder, private messageService:MessageService ) {

    this.Form = this.fb.group({
      EmpId: ['', [Validators.required]],
      EmpName: ['', [Validators.required, Validators.pattern('^[sa-zA-Z]*$')]],
      EmpDepartment: ['', [Validators.required, Validators.pattern('^[sa-zA-Z]*$')]],
      EmpMobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    }),

      this.Form1 = this.fb.group({
        EmpId: [''],
        EmpName: ['', [Validators.required, Validators.pattern('^[\\sa-zA-Z]*$')]],
        EmpDepartment: ['', [Validators.required, Validators.pattern('^[\\sa-zA-Z]*$')]],
        EmpMobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      })
  }

  data = [
    { field: 'EmpId', header: 'Employee Id' },
    { field: 'EmpName', header: 'Employee Name' },
    { field: 'EmpDepartment', header: 'Employee Department' },
    { field: 'EmpMobileNo', header: 'EmployeeMobileNo' },
  ];

  ngOnInit(): void {
    this.empget();
  }
  public empget() {
    this.service.getdata().subscribe(res => {
      this.table = res
      console.log(this.table)
    })
  }

  postempdetails() {
    if (this.Form.valid) {

      const reqBody = {
        EmpId: this.Form.controls['EmpId'].value,
        EmpName: this.Form.controls['EmpName'].value,
        EmpDepartment: this.Form.controls['EmpDepartment'].value,
        EmpMobileNo: this.Form.controls['EmpMobileNo'].value
      }
      this.service.postdata(reqBody).subscribe(
        res => {
          this.Form.reset();

          console.log(res);
        });
      this.empget();
      // this.msgs1=[{severity:'info', summary:'Info', detail:'Details submitted'}];
      this.messageService.add({severity:'success', detail:'Details submitted'});
    }
    else {
      this.Form.markAllAsTouched();
      this.messageService.add({severity:'warn', detail:'All fields are required'});
      // this.msgs1=[{severity:'warn', summary:'Warn', detail:'All fields are required'}];
    }
  
  }

  showdialog() {
    this.show = !this.show
    //this.router.navigate(['/crud/getempdata'])
  }

  onEdit(table: any) {
    this.display = true;
    console.log(table);

    this.Form1.controls['EmpId'].patchValue(table.EmpId);
    this.Form1.controls['EmpName'].patchValue(table.EmpName);
    this.Form1.controls['EmpDepartment'].patchValue(table.EmpDepartment);
    this.Form1.controls['EmpMobileNo'].patchValue(table.EmpMobileNo);
    
  }

  updateEmp() {
    if (this.Form1.valid) {

      const reqBody = {
        "EmpId": this.Form1.controls['EmpId'].value,
        "EmpName": this.Form1.controls['EmpName'].value,
        "EmpDepartment": this.Form1.controls['EmpDepartment'].value,
        "EmpMobileNo": this.Form1.controls['EmpMobileNo'].value,
      }

      this.service.updatedata(reqBody).subscribe(res => {
        console.log(res);
        this.empget();
        // this.editShow=!this.editShow;
        this.messageService.add({severity:'success', detail:'Updated succesfully'});
        // this.msgs2= [{severity:'info', summary:'Info', detail:'Updated succesfully'}];
      })
    }
    else {
      this.Form.markAllAsTouched();
      this.messageService.add({severity:'warn', detail:'All fields are required'});
      // this.msgs2= [{severity:'warn', summary:'Warn', detail:'All fields are requied'}];
    }
    
   
  }

  ondelete(EmpId: any) {
    const reqbody: any = {
      body: {
        EmpId: EmpId

      }
    }
    console.log(reqbody)
    this.service.deletedata(reqbody).subscribe((res: any) => {
      this.empget();
    })
    this.messageService.add({severity:'success', detail:'Deleted successfully'});
    // this.msgs3= [{severity:'info', summary:'Info', detail:'Deleted successfully'}];
  }


  showDialog() {
    this.display = true;
  }

exportExcel() {
  import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.table);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });
    this.saveAsExcelFile(excelBuffer, "Details");
  });
  this.messageService.add({severity:'info', detail:'Excel File dowloaded'});
  // this.msgs4=[{severity:'info', summary:'Info', detail:'Excel File dowloaded'}];
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  let EXCEL_EXTENSION = ".xlsx";
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  this.downloadexcelref.nativeElement.href = URL.createObjectURL(data);
  this.downloadexcelref.nativeElement.download = 'Excel.xlsx';
  this.downloadexcelref.nativeElement.click();
}


}







 
