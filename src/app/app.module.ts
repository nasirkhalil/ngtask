import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HomeComponent } from './home/home.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { HeaderComponent } from './desktop/header/header.component';
import { FooterComponent } from './desktop/footer/footer.component';
import { HomeBannerComponent } from './desktop/home-banner/home-banner.component';
import { SportComponent } from './desktop/sport/sport.component';
import { InplayComponent } from './desktop/inplay/inplay.component';
import { CasinoComponent } from './desktop/casino/casino.component';
import { IndianCasinoComponent } from './desktop/indian-casino/indian-casino.component';
import { PopularGamesComponent } from './desktop/popular-games/popular-games.component';
import { PromotionComponent } from './desktop/promotion/promotion.component';
import { TutorialComponent } from './desktop/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesktopComponent,
    MobileComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    SportComponent,
    InplayComponent,
    CasinoComponent,
    IndianCasinoComponent,
    PopularGamesComponent,
    PromotionComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    TabsModule,
    NgxSliderModule
  ],
  providers: [
    Title,
    Meta,
    {provide: 'googleTagManagerId', useValue: 'GTM-KKPVNLC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
