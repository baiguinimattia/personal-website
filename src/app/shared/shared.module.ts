import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SwiperComponent } from './swiper/swiper.component';



@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, SwiperComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [HeaderComponent, SideMenuComponent]
})
export class SharedModule { }
