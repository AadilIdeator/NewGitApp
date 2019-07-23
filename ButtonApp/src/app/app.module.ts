import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonCLcik } from './button.component';
import { upLinkLike } from './twitter.component';
import { TvComponent } from './tv.component';
import { AcComponent } from './ac.component';
import { ProductInfo } from './product.component';
import { MobileComponent } from './mobile.component';
import { LaptopComponent } from './laptop.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCLcik,
    upLinkLike,
    TvComponent,
    AcComponent,
    ProductInfo,
    MobileComponent,
    LaptopComponent,
    CartComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
