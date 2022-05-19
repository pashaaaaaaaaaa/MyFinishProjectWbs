import { Component, OnInit } from '@angular/core';
import { IMaterials } from 'src/app/app';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {

  slides:IMaterials[] = [
    {
      img:"../../../assets/knifeOne.png",
      text:"Резак 18 мм",
      price:"от 500 руб",
    },
    {
      img:"../../../assets/knifeTwo.png",
      text:"Реказ 9 мм",
      price:"от 100 руб",
    },
    {
      img:"../../../assets/carpet.png",
      text:"Коврик для резки",
      price:"от 350 руб",
    },
    {
      img:"../../../assets/ruler.png",
      text:"Линейка",
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
