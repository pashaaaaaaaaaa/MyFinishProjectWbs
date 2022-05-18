import { Injectable } from '@angular/core';
import { IFormRequest } from './app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  arrOfApplications: IFormRequest[] = []
 

  constructor() { }

  addArr(arrForm:IFormRequest):void {
    this.arrOfApplications.push(arrForm)
    console.log(this.arrOfApplications)
  }
}
