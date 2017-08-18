/**
 * Core
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * Vendor
 */
import { MomentModule } from 'angular2-moment';
import { NgxGalleryModule } from 'ngx-gallery';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ArrivingComponent } from './components/arriving/arriving.component';
import { DepartingComponent } from './components/departing/departing.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

/**
 * Routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'arriving', component: ArrivingComponent },
  { path: 'departing', component: DepartingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    ArrivingComponent,
    DepartingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxGalleryModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false // debugging purposes only
      }
    ),
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
