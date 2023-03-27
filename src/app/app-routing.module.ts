import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdultProgramComponent } from './pages/services/adult-program/adult-program.component';
import { CDSComponent } from './pages/services/cds/cds.component';
import { YouthProgramComponent } from './pages/services/youth-program/youth-program.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomepageComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'unit-vacancies', component: VacanciesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'adult-program', component: AdultProgramComponent },
  { path: 'youth-program', component: YouthProgramComponent },
  { path: 'community-development-services', component: CDSComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
