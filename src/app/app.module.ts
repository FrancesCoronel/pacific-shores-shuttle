import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MomentModule } from 'angular2-moment';
import { ArrivingComponent } from './arriving/arriving.component';
import { DepartingComponent } from './departing/departing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'arriving', component: ArrivingComponent },
  { path: 'departing', component: DepartingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ArrivingComponent,
    DepartingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MomentModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
