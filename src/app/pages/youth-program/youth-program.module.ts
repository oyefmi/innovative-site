import { NgModule } from "@angular/core";

import { YouthProgramModuleComponent } from "./youth-program-routing.module";
import { YouthProgramComponent } from "./youth-program.component";

@NgModule({
    imports: [
        YouthProgramModuleComponent
    ],
    declarations: [
        YouthProgramComponent
    ]
})

export class YouthProgramModule { }