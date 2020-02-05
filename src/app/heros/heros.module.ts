import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HerosComponent } from './heros/heros.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';


@NgModule({
  declarations: [HerosComponent, HeroListComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
