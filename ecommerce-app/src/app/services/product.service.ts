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
    // Simulamos una llamada a API con delay
    return of(productsData);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = productsData.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const products = productsData.filter(p => p.category === category);
    return of(products);
  }
} 