import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormRequest } from 'src/app/app';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  formRequest!: FormGroup;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.formRequest = new FormGroup({
      nameUser: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      ]
      ),
      numberUser: new FormControl('', [
        Validators.required,
      ]),
      materialsUser: new FormControl('', [
        Validators.minLength(5),
      ]),
    })
  }
  sendRequest(): void{
    if (this.formRequest.value.nameUser.trim() || (this.formRequest.value.numberUser.trim())) {
      let arrForm: IFormRequest = {
        user: this.formRequest.get("nameUser")?.value,
        number: this.formRequest.get("numberUser")?.value,
        text: this.formRequest.get("materialsUser")?.value,
      }
      this.formRequest.reset()
      this.service.addArr(arrForm)
  }
}
}
