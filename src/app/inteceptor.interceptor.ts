import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { EmployeesService } from './services/employees.service';

@Injectable()
export class InteceptorInterceptor implements HttpInterceptor {

  constructor(private emp:EmployeesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
          this.emp.show()
    return next.handle(request).pipe(finalize(()=>this.emp.hide()))
  }
}
