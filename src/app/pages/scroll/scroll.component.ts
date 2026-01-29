import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf } from '@angular/cdk/scrolling';

interface Product {
  id: string;
  title: string;
  price: number
  images: string[];
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, HttpClientModule, ScrollingModule],
  templateUrl: './scroll.component.html',
  styles: ``
})
export class ScrollComponent implements OnInit {

  products: Product[] = []

  constructor(

    private http: HttpClient

  ) {}

  ngOnInit(): void {
    
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

}
