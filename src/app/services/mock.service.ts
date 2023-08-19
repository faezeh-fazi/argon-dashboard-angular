import { Injectable } from '@angular/core';
import { mockItems } from '../mock/products';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  getItems(){
    return mockItems
  }

  constructor() { }
}
