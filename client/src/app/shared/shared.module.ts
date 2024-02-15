import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginHeaderComponent } from './pagin-header/pagin-header.component';
import { PagerComponent } from './pager/pager.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    PaginHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
    
  ],
  exports:[
    PaginHeaderComponent,
    PagerComponent,
    CarouselModule
  ]
})
export class SharedModule { }
