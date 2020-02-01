import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FooterComponent } from './footer/footer.component';
import { ExternalUrlDirective } from './external-url.directive';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [HeaderComponent, SwiperComponent, FooterComponent, ExternalUrlDirective],
  imports: [
    CommonModule,
    ClarityModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: [HeaderComponent, SwiperComponent, FooterComponent, ExternalUrlDirective]
})
export class SharedModule { }
