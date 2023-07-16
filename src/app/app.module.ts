import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './component/employee/employee.component';
import { AddNewComponent } from './component/add-new/add-new.component';
import { EditComponent } from './component/edit/edit.component';
import { LoadingComponent } from './component/loading/loading.component';
import { InteceptorInterceptor } from './inteceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EmployeeComponent,
    AddNewComponent,
    EditComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:InteceptorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
