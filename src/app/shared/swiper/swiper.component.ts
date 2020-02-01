import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  config: SwiperConfigInterface = {
    initialSlide: 0,
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: false,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 1
      },
      1000: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
