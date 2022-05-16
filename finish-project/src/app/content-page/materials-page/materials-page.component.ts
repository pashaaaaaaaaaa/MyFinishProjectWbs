import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss']
})
export class MaterialsPageComponent implements OnInit {

  slides = [
    { 'image': '../../../assets/firstMat.png' },
    { 'image': '../../../assets/secondMat.png' }
];


  constructor() { }

  ngOnInit(): void {
  }

}
