import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareersComponent } from './careers.component'; 

const routes: Routes = [
    { path: 'careers', component: CareersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class CareersRoutingModule { }