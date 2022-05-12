import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { Crud1Component } from './crud1/crud1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//PrimeNG
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import {StyleClassModule} from 'primeng/styleclass';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    CrudComponent,
    FileuploadComponent,
    Crud1Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    FileUploadModule,
    DialogModule,
    CardModule,
    StyleClassModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TabViewModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
