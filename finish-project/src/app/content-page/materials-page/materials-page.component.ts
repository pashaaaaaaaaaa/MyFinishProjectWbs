import { Component, OnInit } from '@angular/core';
import { IMaterials } from 'src/app/app';

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss']
})
export class MaterialsPageComponent implements OnInit {

  slides:IMaterials[] = [
    {
      img:"../../../assets/thridMat.png",
      text:"ПВХ",
      price:"от 350 руб",
    },
    {
      img:"../../../assets/firstMat.png",
      text:"Пенопласт",
      price:"от 500 руб",
    },
    {
      img:"../../../assets/secondMat.png",
      text:"Пенокартон",
      price:"от 100 руб",
    },
    {
      img:"../../../assets/fourMat.png",
      text:"Полистирол",
      price:"от 400 руб",
    },
  ]

  slides2:IMaterials[] = [
    {
      img:"../../../assets/thridMat.png",
      text:"ПВХ",
      price:"от 350 руб",
    },
    {
      img:"../../../assets/firstMat.png",
      text:"Пенопласт",
      price:"от 500 руб",
    },
    {
      img:"../../../assets/secondMat.png",
      text:"Пенокартон",
      price:"от 100 руб",
    },
    {
      img:"../../../assets/fourMat.png",
      text:"Полистирол",
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
