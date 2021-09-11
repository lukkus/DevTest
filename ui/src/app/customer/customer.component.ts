import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public types: string[] = [];
  public customers: CustomerModel[] = [];
  public customerForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', [Validators.required]]
    })

    this.customerService.GetCustomers().subscribe(customers => {
      this.customers = customers;
    })

    this.customerService.GetCustomerTypes().subscribe(types => {
      this.types = types;
    })
  }

  createCustomer() {
    if (this.customerForm.invalid) {
      alert('form is not valid');
    } else {
      this.customerService.CreateCustomer(this.customerForm.value).subscribe(newCustomer => {
        this.customers.push(newCustomer);
      });
    }
  }
}
