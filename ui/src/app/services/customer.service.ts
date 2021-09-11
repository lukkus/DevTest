import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly customerBaseUrl = 'http://localhost:63235/customer';
  constructor(private httpClient: HttpClient) { }

  public GetCustomerTypes(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.customerBaseUrl + '/types');
  }
  public GetCustomers(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.customerBaseUrl);
  }

  public GetCustomer(customerId: number): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(this.customerBaseUrl + `/${customerId}`);
  }

  public CreateCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.httpClient.post<CustomerModel>(this.customerBaseUrl, customer);
  }
}
