import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service




import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EstimationCalculatorComponent } from './estimation-calculator/estimation-calculator.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PerDayUsageFormComponent } from './per-day-usage-form/per-day-usage-form.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailService } from './_service/email.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'perdayusageform', component: PerDayUsageFormComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    EstimationCalculatorComponent,
    GalleryComponent,
    PerDayUsageFormComponent,

  ],
  imports: [

    HttpClientModule, HttpModule,
    FormsModule,
    BrowserModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFW-ueQta39p7AeoP9YguHJgWGI5vU1dk'
    }),
    RouterModule.forRoot(routes
    )
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
