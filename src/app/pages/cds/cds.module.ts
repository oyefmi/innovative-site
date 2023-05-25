import { NgModule } from "@angular/core";

import { CDSRoutingModule } from "./cds-routing.module";
import { CDSComponent } from "./cds.component";

@NgModule ({
    imports: [
        CDSRoutingModule
    ],
    declarations: [
        CDSComponent
    ]
})

export class CDSModule { }