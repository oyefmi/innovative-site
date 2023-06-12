import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch:'full'
  },
  {
    path: 'about-us',
    loadChildren: async () => (await import('./pages/about/about.module')).AboutModule
  },
  {
    path: 'unit-vacancies',
    loadChildren: async () => (await import('./pages/vacancies/vacancies.module')).VacanciesModule
  },
  {
    path: 'adult-program',
    loadChildren: async () => (await import('./pages/adult-program/adult-program.module')).AdultProgramModule
  },
  {
    path: 'youth-program',
    loadChildren: async () => (await import('./pages/youth-program/youth-program.module')).YouthProgramModule
  }, 
  {
    path: 'community-development-services', 
    loadChildren: async () => (await import('./pages/cds/cds.module')).CDSModule
  },
  { 
    path: 'careers', 
    loadChildren: async () => (await import('./pages/careers/careers.module')).CareersModule
  },
  { 
    path: 'contact-us', 
    loadChildren: async () => (await import('./pages/contact/contact.module')).ContactModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
