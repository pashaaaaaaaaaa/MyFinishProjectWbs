import { Component, OnInit } from '@angular/core';
import { IMaterials } from 'src/app/app';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {

  slides:IMaterials[] = [
    {
      img:"../../../assets/mans.png",
      text:"Модели людей масштаб 1:50, 1:87, 1:100, 1:150, 1:200",
      price:"от 500 руб",
    },
    {
      img:"../../../assets/car.png",
      text:"Модели авто масштаб 1:50, 1:87, 1:100, 1:150, 1:200",
      price:"от 100 руб",
    },
    {
      img:"../../../assets/trees.png",
      text:"Модели деревьев масштаб 1:50, 1:87, 1:100, 1:150, 1:200",
      price:"от 350 руб",
    },
    {
      img:"../../../assets/flashlight.png",
      text:"Модели фонарей масштаб 1:50, 1:87, 1:100, 1:150, 1:200",
      price:"от 400 руб",
    },
  ]

  arrOfOrders:IMaterials[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide():void {
    const newSlides:any[] = []
    this.slides.forEach((slide, index) => {
      if (index > 0 ) {
        newSlides[index] = this.slides[index - 1] ;
      }
      else {
        newSlides[index] = this.slides[this.slides.length - 1];
      }
    })
    this.slides = newSlides
  }

  prevSlide():void {
    console.log("h")
    const newSlides:any[] = []
    this.slides.forEach((slide, index) => {
      if (index < this.slides.length - 1 ) {
        newSlides[index] = this.slides[index + 1];
      }
      else {
        newSlides[index] = this.slides[0];
      }
    })
    this.slides = newSlides
  }

  purchase(slide:IMaterials):void {
    this.arrOfOrders.push(slide)
    console.log(this.arrOfOrders)
  }
}
