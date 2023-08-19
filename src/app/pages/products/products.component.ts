import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  currentPage = 1;
  totalPages = 1;
  products = [];

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(page: number) {
    if(page >= 1 && page <= this.totalPages) {
      return;
    }
  }

}
