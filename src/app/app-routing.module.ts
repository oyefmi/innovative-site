import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultProgramModule } from './pages/adult-program/adult-program.module';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent, 
    pathMatch: 'full' 
  },
  { 
    path: 'about-us',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  { 
    path: 'unit-vacancies', 
    // loadChildren: () => import('./pages/vacancies/vacancies.module').then(m => m.VacanciesModule)
    component: VacanciesComponent
  },
  { 
    path: 'careers', 
    loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule)
  },
  { 
    path: 'adult-program', component: AdultProgramModule
  },
  { 
    path: 'youth-program', 
    loadChildren: () => import('./pages/youth-program/youth-program.module').then(m => m.YouthProgramModule) 
  },
  { path: 'community-development-services', 
    loadChildren: () => import('./pages/cds/cds.module').then(m => m.CDSModule) 
  },
  { 
    path: 'contact-us', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
  }, 
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
