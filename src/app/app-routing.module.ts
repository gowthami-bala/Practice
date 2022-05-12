import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CrudComponent } from './crud/crud.component';
import { Crud1Component } from './crud1/crud1.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'child',component:ChildComponent},
  {path:' ',component:AppComponent},
  {path:'crud',component:CrudComponent},
  {path:'parent',component:ParentComponent},
  {path:'upload',component:FileuploadComponent},
  {path:'crud1', component:Crud1Component},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
