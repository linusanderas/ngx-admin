import { Injectable } from '@angular/core';
import { User } from '../../../../Devoted/src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user: User;

  constructor() { }
}
