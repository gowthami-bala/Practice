import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  public getdata(){
    return this.http.get('http://172.17.12.111:3456/employee/getting')
  }
  public postdata(reqBody:any){
    return this.http.post('http://172.17.12.111:3456/employee/posting',reqBody)
  }
  public updatedata(reqBody:any){
    return this.http.put('http://172.17.12.111:3456/employee/updating',reqBody)
  }
  public deletedata(reqBody:any){
    return this.http.delete('http://172.17.12.111:3456/employee/deleting',reqBody)
  }
  DownloadFiles() {
    return this.http.get('http://localhost:3456/file/get', {responseType: 'text'});
}

}


