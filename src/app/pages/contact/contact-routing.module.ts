import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
    { path: 'contact-us', component: ContactComponent }
]

@NgModule ({
    declarations: [],
    imports: [[RouterModule.forRoot(routes)]],
    exports: [RouterModule]
})

export class ContactRoutingModule { }