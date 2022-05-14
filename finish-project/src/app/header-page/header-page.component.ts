import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  formToOrder = FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  // this.formToOrder = new FormGroup({
  //   nameUser: new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(3)
  //   ]),
  //   userPhone: new FormControl('',[
  //     Validators.required,
  //   ]),
  //   textUser: new FormControl('',[
  //     Validators.minLength(5)
  //   ])
  // })

}
