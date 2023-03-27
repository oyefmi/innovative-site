import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LinkboxComponent } from './components/linkbox/linkbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownArrowComponent } from './components/downarrow/downarrow.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DownArrowComponent,  
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    LinkboxComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
