import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormRequest } from 'src/app/app';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

  formRequest!: FormGroup;

  arrOfApplications: IFormRequest[] = [{
    user: "john smith",
    number: "7777777777777",
    text: "i need many materials)))"
  }];

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
    if (this.formRequest.get("nameUser")?.value.trim() && (this.formRequest.get("numberUser")?.value.trim() && (this.formRequest.get("materialsUser")?.value.trim()))) {
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
