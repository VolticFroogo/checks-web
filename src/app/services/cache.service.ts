import { Injectable } from '@angular/core';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  constructor() { }

  public static redirect = '/';

  public static operator: Operator;
}
