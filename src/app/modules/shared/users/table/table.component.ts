import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product';
import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from "../../components/btn/btn.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule, HttpClientModule, CommonModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct()
  columns: string[] = ['id', 'title', 'price', 'images', 'Actions'];
  total = 0; 
  input = new FormControl('', {nonNullable: true})


  constructor(private http: HttpClient) {}


  ngOnInit(): void{
    
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotalAll();
    })

    this.input.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.dataSource.find(value)
    })
  }

  update(product: Product) {

    this.dataSource.update(product.id, {price: 20})
  }

}
