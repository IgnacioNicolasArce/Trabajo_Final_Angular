import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import productsData from '../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(productsData);
  }

  getProductById(id: string): Observable<Product> {
    const product = productsData.find(p => p.id === id);
    if (product) {
      return of(product);
    } else {
      throw new Error('Product not found');
    }
  }
} 