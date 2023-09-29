import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from "@angular/google-maps";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";

@NgModule ({
    imports: [
        ContactRoutingModule,
        FormsModule,
        GoogleMapsModule,
    ],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule { }