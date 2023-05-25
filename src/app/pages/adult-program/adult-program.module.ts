import { NgModule } from "@angular/core";

import { AdultProgramRoutingModule } from "./adult-program-routing.module";
import { AdultProgramComponent } from "./adult-program.component";

@NgModule ({
    imports: [
        AdultProgramRoutingModule
    ],
    declarations: [
        AdultProgramComponent
    ]
})

export class AdultProgramModule { }