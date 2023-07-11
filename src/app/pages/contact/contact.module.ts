import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from "@angular/google-maps";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";

@NgModule ({
    imports: [
        ContactRoutingModule,
        ReactiveFormsModule,
        GoogleMapsModule
    ],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule { }